
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> _   _ _   _ ____      _    ___ ____  ____   ___ ___ ____  
| | | | \ | |  _ \    / \  |_ _|  _ \|  _ \ / _ \_ _|  _ \ 
| | | |  \| | |_) |  / _ \  | || | | | |_) | | | | || | | |
| |_| | |\  |  _ <  / ___ \ | || |_| |  _ <| |_| | || |_| |
       \___/|_| \_|_| \_\/_/   \_\___|____/|_| \_\\___/___|____/ 
                                                            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
