//exercice1
function entierEnChaine(x) {
    if (Number.isInteger(x)) {
        console.log(x.toString());
    } else {
        console.log("Error");
    }
}
//exercice2
function sommeTableau(T){
    let s=0
    for(let i=0; i<T.length ; i++){
        s+=T[i]
    }
    return s
}
//exercice3
function  moyenneTableau(T){
    let s=sommeTableau(T)
    let moy=s/T.length
    return moy
}
//exercice4
function getUserById(users,id){
    for(let i=0; i<users.length; i++){
        if(users[i].id==id){
            return users[i]
        }
    }
    return "no user with the given id"
}
//exercice5
function sortUsers(users){
    let ages=[]
    let names=[]
    for(let i=0; i<users.length; i++){
        ages.push(users[i].age)
    }
    ages.sort()
    //or ages.sort((a, b) => a - b)
    for(let i=0;i<ages.length;i++){
        for(let j=0;j<users.length;j++){
            if(users[j].age==ages[i]){
                names.push(users[j].first)
            }
        }
    }
    return names
}