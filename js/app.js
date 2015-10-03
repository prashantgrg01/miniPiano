window.addEventListener("load", function() {
    //Initialize variables and the Howl library
    var sound = new Howl({});
    
    //Listens for keypresses within the window and calls the keyClicked function
    window.addEventListener("keydown", keyClicked);
    
    //keyClicked function which handles the key clicked on the keyboard and passes the respective notes to other functions
    function keyClicked(event) {        
        //Clicked A for major C note
        if (event.keyCode == 65 && !event.shiftKey) {
            notePressed("c");
        }
        
        //Clicked A with Shift for sharp C note
        if (event.keyCode == 65 && event.shiftKey) {
            notePressed("cs");
        }
        
        //Clicked S for major D note
        if (event.keyCode == 83 && !event.shiftKey) {
            notePressed("d");
        }
        
        //Clicked S with Shift for sharp D note
        if (event.keyCode == 83 && event.shiftKey) {
            notePressed("ds");
        }
        
        //Clicked D for major E note
        if (event.keyCode == 68 && !event.shiftKey) {
            notePressed("e");
        }
        
        //Clicked F for major F note
        if (event.keyCode == 70 && !event.shiftKey) {
            notePressed("f");
        }
        
        //Clicked F with Shift for sharp F note
        if (event.keyCode == 70 && event.shiftKey) {
            notePressed("fs");
        }
        
        //Clicked H for major G note
        if (event.keyCode == 72 && !event.shiftKey) {
            notePressed("g");
        }
        
        //Clicked H with Shift for sharp G note
        if (event.keyCode == 72 && event.shiftKey) {
            notePressed("gs");
        }
        
        //Clicked J for major A note
        if (event.keyCode == 74 && !event.shiftKey) {
            notePressed("a");
        }
        
        //Clicked J with Shift for sharp A note
        if (event.keyCode == 74 && event.shiftKey) {
            notePressed("as");
        }
        
        //Clicked K for major B note
        if (event.keyCode == 75 && !event.shiftKey) {
            notePressed("b");
        }
        
        //Clicked Space for rest
        if (event.keyCode == 32) {
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