const button = document.getElementById('button');
const toasts = document.getElementById('toast')

const messages =[
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]
const types =[ 'info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function  createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type? type :  getrandomType())

    notif.innerText = message? message : getrandomMessage()
    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },3000)
}

function getrandomMessage() {
         return messages[Math.floor(Math.random()*messages.length)
        ]
}
function getrandomType() {
    return types[Math.floor(Math.random()*types.length)
   ]
}