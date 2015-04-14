using UnityEngine;
using System.Collections;

public class FingerCountChecker : MonoBehaviour {

	public LeapManager _leapManager;
	public TextMesh text;
	// Use this for initialization
	void Start () {
		text = gameObject.GetComponent(typeof(TextMesh)) as TextMesh;
		_leapManager = (GameObject.Find("LeapManager") as GameObject).GetComponent(typeof(LeapManager)) as LeapManager;

	}
	
	// Update is called once per frame
	void Update () {
		text.text = "Finger Count: " + _leapManager.frontmostHand().Fingers.Count;


		if (_leapManager.frontmostHand ().Fingers.Count == 1) {
			transform.position = new Vector3(-6, 4, 1);
		} 
		else {
			transform.position = new Vector3(-6, 4, 2);
		}

	}
}
