let users = [
    {
        profile: "https://randomuser.me/api/portraits/men/1.jpg",
        fullName: "Your Status",
        time: "10 hour ago",
        username: "abhii",
        story: "https://plus.unsplash.com/premium_photo-1732776567041-885234fdc3c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profile: "https://randomuser.me/api/portraits/women/2.jpg",
        fullName: "Jane Smith",
        time: "11 hour ago",
        story: "https://images.unsplash.com/photo-1733407826766-6361c7c1ea24?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profile: "https://randomuser.me/api/portraits/men/3.jpg",
        fullName: "Michael Johnson",
        time: "12 hour ago",
        story: "https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profile: "https://randomuser.me/api/portraits/women/4.jpg",
        fullName: "Emily Davis",
        time: "1 hour ago",
        story: "https://images.unsplash.com/photo-1733778567717-312f3ed1a654?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profile: "https://randomuser.me/api/portraits/men/5.jpg",
        fullName: "William Taylor",
        time: "2 hour ago",
        story: "https://images.unsplash.com/photo-1732919258482-94ac4b1d9a69?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profile: "https://randomuser.me/api/portraits/women/6.jpg",
        fullName: "Sarah Lee",
        time: "3 hour ago",
        story: "https://images.unsplash.com/photo-1732734042420-1fa41185ad56?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profile: "https://randomuser.me/api/portraits/men/7.jpg",
        fullName: "James Brown",
        time: "4 hour ago"
    },
    {
        profile: "https://randomuser.me/api/portraits/women/8.jpg",
        fullName: "Jessica Martin",
        time: "5 hour ago"
    },
    {
        profile: "https://randomuser.me/api/portraits/men/9.jpg",
        fullName: "Robert Garcia",
        time: "6 hour ago"
    },
    {
        profile: "https://randomuser.me/api/portraits/women/10.jpg",
        fullName: "Lisa Hall",
        time: "7 hour ago"
    }
];

var sum = ''
users.forEach(function(elem,idx){
    sum = sum + `<div class="mini">
                    <img  id=${idx} src="${elem.profile}" alt="">
                    <h5>${elem.fullName}</h5>
                </div>`
})
var story = document.querySelector('.story')
var full = document.querySelector('.full')
document.querySelector('.full img')
story.innerHTML = sum

story.addEventListener('click',function(dets){
    var gold = users[dets.target.id].story

    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(inter)
    },2000)


    full.style.display = 'block'
    full.style.backgroundImage =  `url(${gold})`
})

story.addEventListener('click',function(dets){
    var gold = users[dets.target.id].fullName
    var img = users[dets.target.id].profile
    var hidden = document.querySelector('.hidden')
    var hiddenImg = document.querySelector('.hidden img')
    var hiddenText = document.querySelector('.hidden-text h2')
    
    hiddenImg.src = img
    hiddenText.innerText = gold
})

// document.querySelectorAll('.mini img, .mini h5').forEach(function(elem){
//     elem.style.margin = '25px 0px';
//     elem.style.display = 'flex';
//     elem.style.flexDirection = 'column';
//     elem.style.justifyContent = 'space-between';
// })



















