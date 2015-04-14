#pragma strict

var score: int = 0.0;

var text;

function PointUpdate (PointVal: int) {
	score += PointVal;
}

function OnGUI()
{
	GUI.Box(new Rect(10, 40, 50, 20), "" + score);
}
