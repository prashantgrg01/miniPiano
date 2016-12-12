window.addEventListener("load", function() {
    //Initialize variables and the Howl library
    var sound = new Howl({});
    
    //Listens for keypresses within the window and calls the keyClicked function
    window.addEventListener("click", keyClicked);
    //Listens for any touch event on the piano keys and calls the keyClicked function
    document.getElementById("piano").addEventListener("touchstart", keyClicked);
    
    //keyClicked function which handles the key clicked on the keyboard and passes the respective notes to other functions
    function keyClicked(event) {
        //For test purpose
        //console.log("Clicked note : " + event.target.id);
        
        //Touch or click check function for each individual note
        if (event.target.id == "note1s") {
            notePressed("note1s");
        }
        if (event.target.id == "note2s") {
            notePressed("note2s");
        }
        if (event.target.id == "note3s") {
            notePressed("note3s");
        }
        if (event.target.id == "note4s") {
            notePressed("note4s");
        }
        if (event.target.id == "note5s") {
            notePressed("note5s");
        }
        if (event.target.id == "note6s") {
            notePressed("note6s");
        }
        if (event.target.id == "note7s") {
            notePressed("note7s");
        }
        if (event.target.id == "note8s") {
            notePressed("note8s");
        }
        if (event.target.id == "note9s") {
            notePressed("note9s");
        }
        if (event.target.id == "note10s") {
            notePressed("note10s");
        }
        if (event.target.id == "note11s") {
            notePressed("note11s");
        }
        if (event.target.id == "note12s") {
            notePressed("note12s");
        }
        if (event.target.id == "note1o") {
            notePressed("note1o");
        }
        if (event.target.id == "note2o") {
            notePressed("note2o");
        }
        if (event.target.id == "note3o") {
            notePressed("note3o");
        }
        if (event.target.id == "note4o") {
            notePressed("note4o");
        }
        if (event.target.id == "note5o") {
            notePressed("note5o");
        }
        if (event.target.id == "note6o") {
            notePressed("note6o");
        }
        if (event.target.id == "note7o") {
            notePressed("note7o");
        }
        if (event.target.id == "note8o") {
            notePressed("note8o");
        }
        if (event.target.id == "note9o") {
            notePressed("note9o");
        }
        if (event.target.id == "note10o") {
            notePressed("note10o");
        }
        if (event.target.id == "note11o") {
            notePressed("note11o");
        }
        if (event.target.id == "note12o") {
            notePressed("note12o");
        }
        
        //Clicked Space for rest
        //if (event.keyCode == 32) {
        //    event.preventDefault();
        //    notePressed("space");
        //}
        
        event.preventDefault();
        return false;
    }
    
    //notePressed function to identify if its a real note or a pause i.e.Space
    function notePressed(note) {
        //if its not a space then call the playNote function
        if (note != "space") {
            playNote(note);
        } else {
            //Reset the design of the keyboard notes
            var mks = document.querySelectorAll(".major-key");
            for (var i=0; i<mks.length; i++) {
                mks[i].style.backgroundColor = "#fff";   
            }
            var sks = document.querySelectorAll(".sharp-Key");
            for (var i=0; i<sks.length; i++) {
                sks[i].style.backgroundColor = "#222";   
            }
            //Stop the playing sounds
            sound.stop();
        }
    }   
    
    //playNote function
    function playNote(note) {
        sound = new Howl({
            urls: ["audio/"+note+".mp3"],
            onplay: function() {
                //Make the respective note appear like its clicked
                document.querySelector("#"+note).style.backgroundColor = "#bdc3c7";
            },
            onend: function() {
                //Reset the respective note to appear like its not clicked
                if (note == "note2s" || note == "note2o" || note == "note4s" || note == "note4o" || 
                    note == "note7s" || note == "note7o" || note == "note9s" || note == "note9o" ||
                    note == "note11s" || note == "note11o") {
                    document.querySelector("#"+note).style.backgroundColor = "#222";
                } else {
                    document.querySelector("#"+note).style.backgroundColor = "#fff";
                }
            }
        }).play();
    }
    
});