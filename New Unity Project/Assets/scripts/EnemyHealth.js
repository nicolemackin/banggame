#pragma strict

var Health = 100;
var Target: GameObject;
var Target2: GameObject;
var Target3: GameObject;
var Downed = 0;
var PointVal = 10;

var speed = 0.0;
var randpop = 0;
var nextPop = 0.0;
var nextDrop = 0.0;

var clip: AudioClip;

function Update()
{	
	Birth();
	Fall();
	
	if(Target2 != null && Target3 != null)
	{
		if(Health <= 0 && Downed == 0 && Target2.GetComponent(EnemyHealth).Health <= 0 && Target3.GetComponent(EnemyHealth).Health <= 0)
		{
			Dead();
			Downed = 1;
		}
	}
	else if(Target2 != null)
	{
		if(Health <= 0 && Downed == 0 && Target2.GetComponent(EnemyHealth).Health <= 0)
		{
			Dead();
			Downed = 1;
		}
	}
	else
	{
		if(Health <= 0 && Downed == 0)
		{
			Dead();
			Downed = 1;
		}
	}
}

function ApplyDamage (TheDamage : int)
{
	if(Health > 0)
	{
	Health -= TheDamage;
	//GameObject.Find("ScoreKeeper").SendMessage("PointUpdate", PointVal, SendMessageOptions.DontRequireReceiver);
	}
}

function Birth()
{
	//if(Downed == 1){
		if(Time.time > nextPop)//uses randpop and nextpop
		{
			randpop = Random.Range(speed + 1, speed + 3);
			nextPop = Time.time + randpop;
			Health = 100;
			audio.PlayOneShot(clip);
			Target.animation.Play("Rise");
			Downed = 0;
		}
	//}
	//if(Downed == 0)	{Fall();}
}

function Fall(){
	//if(Downed == 0){
		if(Time.time > nextDrop)// uses speed and nextDrop
		{
			nextDrop = nextPop + speed;
			audio.PlayOneShot(clip);
			Target.animation.Play("Fall");
			Downed = 1;
		}
	//}
}

function Dead()
{
	Health = 0;	
	GameObject.Find("ScoreKeeper").SendMessage("PointUpdate", PointVal, SendMessageOptions.DontRequireReceiver);
	//Destroy (gameObject);
	Target.animation.Play("Fall");
}

function Move()
{
	//Target.transform.position.x++;
	/*if(Target.transform.position.x >= 30)
	{
		Target.transform.position.x--;
	}*/
	if(Target.transform.position.x <= -45)
	{
		Target.transform.position.x++;
	}
}