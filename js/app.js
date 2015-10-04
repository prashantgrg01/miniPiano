window.addEventListener("load", function() {
    //Initialize variables and the Howl library
    var sound = new Howl({});
    
    //Listens for keypresses within the window and calls the keyClicked function
    window.addEventListener("keydown", keyClicked);
    
    //keyClicked function which handles the key clicked on the keyboard and passes the respective notes to other functions
    function keyClicked(event) {        
        //Clicked S for major C note
        if (event.keyCode == 83) {
            notePressed("c");
        }
        
        //Clicked E for sharp C note
        if (event.keyCode == 69) {
            notePressed("cs");
        }
        
        //Clicked D for major D note
        if (event.keyCode == 68) {
            notePressed("d");
        }
        
        //Clicked R for sharp D note
        if (event.keyCode == 82) {
            notePressed("ds");
        }
        
        //Clicked F for major E note
        if (event.keyCode == 70) {
            notePressed("e");
        }
        
        //Clicked G for major F note
        if (event.keyCode == 71) {
            notePressed("f");
        }
        
        //Clicked Y for sharp F note
        if (event.keyCode == 89) {
            notePressed("fs");
        }
        
        //Clicked H for major G note
        if (event.keyCode == 72) {
            notePressed("g");
        }
        
        //Clicked U for sharp G note
        if (event.keyCode == 85) {
            notePressed("gs");
        }
        
        //Clicked J for major A note
        if (event.keyCode == 74) {
            notePressed("a");
        }
        
        //Clicked I for sharp A note
        if (event.keyCode == 73) {
            notePressed("as");
        }
        
        //Clicked K for major B note
        if (event.keyCode == 75) {
            notePressed("b");
        }
        
        //Clicked Space for rest
        if (event.keyCode == 32) {
            event.preventDefault();
            notePressed("space");
        }
    }
    
    //notePressed function to identify if its a real note or a pause i.e.Space
    function notePressed(note) {
        //if its not a space then call the playNote function
        if (note != "space") {
            playNote(note);
        } else {
            //Reset the design of the keyboard notes
            var mks = document.querySelectorAll(".mKey");
            for (var i=0; i<mks.length; i++) {
                mks[i].style.backgroundColor = "#fff";   
            }
            var sks = document.querySelectorAll(".sKey");
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
                document.querySelector("#"+note).style.backgroundColor = "#e3e3e3";
            },
            onend: function() {
                //Reset the respective note to appear like its not clicked
                if (note == "cs" || note == "ds" || note == "fs" || note == "gs" || note == "as") {
                    document.querySelector("#"+note).style.backgroundColor = "#222";
                } else {
                    document.querySelector("#"+note).style.backgroundColor = "#fff";
                }
            }
        }).play();
    }
    
});