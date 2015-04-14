#pragma strict

var pointA: Vector3;
var pointB: Vector3;
var MoveSpeed = 3.0;

function Start () { 
	while (true) 
	{ 
		yield MoveObject(transform, pointA, pointB, MoveSpeed); 
		yield MoveObject(transform, pointB, pointA, MoveSpeed); 
	} 
}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) 
{ 
var i = 0.0; 
var rate = 3.0/time; 
	while (i < 1.0) 
	{ 
		i += Time.deltaTime * rate; 
		thisTransform.position = Vector3.Lerp(startPos, endPos, i); 
		yield; 
	}
 }