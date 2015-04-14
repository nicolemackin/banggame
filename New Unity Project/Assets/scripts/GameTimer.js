#pragma strict

var Text: UnityEngine.UI.Text;
var timer: float = 10.0;

function Update () {
	timer -= Time.deltaTime;
	
	if (timer <= 0)
	{
		timer = 0;
		Application.LoadLevel("GameOver");
		// Do Stuff here... e.g. Application.Quit();
	}
}

function OnGUI()
{
	Text.text = "" + timer.ToString;
	//GUI.Box(new Rect(10, 10, 50, 20), "" + timer.ToString("0"));
}