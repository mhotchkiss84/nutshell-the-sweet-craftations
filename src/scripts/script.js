// Importing the chat event listener functions
import chatEventListeners from './chatEventListeners.js';
// Importing the chat api functions
import chatAPI from './chatAPI.js';
// Creating a fake loggin in user
sessionStorage.setItem('userId', 1);
// Creating an event listener for when the user clicks on the chat tab on the nav bar
document.querySelector(`#chat-page`).addEventListener('click', (chatEvent) => {
	// Loading the chat page
	chatEventListeners.loadChatPage();
	// Getting user IDs for use in fetch calls and username for the chat
	chatAPI.getUserIDs();
});
// Creating event listeners for the chat functions
document.body.addEventListener('click', (clickEvent) => {
	if (event.target.id.includes(`submit-chat`)) {
		chatEventListeners.submitNewChatMessage();
	} else if (event.target.id.includes(`delete-message`)) {
		chatEventListeners.deleteChatMessageListener();
	} else if (event.target.id.includes(`edit-message`)) {
		chatEventListeners.editChatMessageListener();
	} else if (event.target.id.includes(`save-msg`)) {
		chatEventListeners.saveChatMsgEditListener();
	}
});
// Creating enter key check onkeydown for new chat message and edit chat message so that the use can hit enter to submit a message or save a message
document.getElementById('output-container').onkeydown = function(e) {
	if (e.keyCode == 13) {
		if (event.target.id.includes(`new-chat-message`)) {
			chatEventListeners.submitNewChatMessage();
		} else if (event.target.id.includes(`edit-msg`)) {
			chatEventListeners.saveChatMsgEditListener();
		}
	}
};
import newsPrinterFunctions from "./newsPrinter.js";
import newsListenFunctions from "./newsListeners.js";
import tasksEvents from "./tasksEventListener.js";

<<<<<<< HEAD
sessionStorage.setItem("userId", 1)


=======
>>>>>>> master

//If the News link in the Nav Bar is clicked, call a function to print the News section
document.querySelector("#news-page").addEventListener("click", function() {
    newsPrinterFunctions.printInitialPage();
})

document.querySelector("#output-container").addEventListener("click", function() {
        newsListenFunctions.checkButton();
    })

    tasksEvents.tasksEventListener();

tasksEvents.tasksPageEventListeners();
   
