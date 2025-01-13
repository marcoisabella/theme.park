
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
 _____ ___  ____   _____   _      _   _    _    ____   ___  _     ___ 
|  ___/ _ \\|  _ \\ |__  /  / \\    | \\ | |  / \\  |  _ \\ / _ \\| |   |_ _|
| |_ | | | | |_) |  / /  / _ \\   |  \\| | / _ \\ | |_) | | | | |    | | 
|  _|| |_| |  _ <  / /_ / ___ \\  | |\\  |/ ___ \\|  __/| |_| | |___ | | 
|_|   \\___/|_| \\_\\/____/_/   \\_\\ |_| \\_/_/   \\_\\_|    \\___/|_____|___|
                                                            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
