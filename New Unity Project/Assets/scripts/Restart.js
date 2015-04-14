#pragma strict

var Health = 100;
var Target: GameObject;

function Update()
{	
		if(Health <= 0)
		{
			Dead();
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

function Dead()
{
	Health = 0;	
	Application.LoadLevel("Scene01");
	Debug.Log("Hit");
}
