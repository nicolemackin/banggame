#pragma strict

var Effect : Transform;
var Muzzle : Transform;
var Tracer : Transform;
var TheDamage = 100;
var point: GameObject;
var count: GameObject;
var shoot: GameObject;
var sound: AudioClip;
private var timeStamp : float;

function Update () {

	
	var hit : RaycastHit;
	var POS = camera.main.WorldToScreenPoint (point.transform.position);
	var ray : Ray = Camera.main.ScreenPointToRay (POS);
	var fingCount = count.transform.position.z;
	
	if (timeStamp <= Time.time){
		if(fingCount == 1 || Input.GetMouseButtonDown(0)){
			if (Physics.Raycast (ray, hit, 100))
			{
				var particleClone = Instantiate(Effect, Vector3(hit.point.x, hit.point.y + 0.2, hit.point.z), Quaternion.LookRotation(hit.normal));
				var muzzle = Instantiate(Muzzle, Vector3(shoot.transform.position.x, shoot.transform.position.y + 0.5, shoot.transform.position.z + 1.3), Quaternion.LookRotation(hit.normal));
				var trace = Instantiate(Tracer, Vector3(shoot.transform.position.x, shoot.transform.position.y + 0.5, shoot.transform.position.z + 1.3), shoot.transform.rotation);
				//Destroy(particleClone.gameObject, 0.2);
				Destroy(muzzle.gameObject, 0.2);
				Destroy(trace.gameObject, 0.2);
				hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
				
				audio.PlayOneShot(sound);
				
				shoot.animation.Play("Shoot");
				timeStamp = Time.time + 0.55;
			}
		}
		}
	}

