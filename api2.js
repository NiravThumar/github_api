const startTime = performance.now();

let userArray = ['jay-ponda', 'sagar', 'vijay', 'nirav-improwised']
let url = 'https://api.github.com/users/22222';
let found = 0;
let notFound = 0;
let userLength = userArray.length;


async function getUserInfo(user, index) {

    await fetch(`https://api.github.com/users/${user}`, {
        method: "GET",
        headers: {

            Authorization: 'Bearer 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'
        }
    })
        .then((response) => {
            if (!response.ok) {
                notFound++
            }
            else {
                found++;
            }
        })

        
    if (userLength == (found + notFound)) {
        console.log('found : ', found, ' notFound : ', notFound);
        const endTime = performance.now();
        console.log("time :", endTime - startTime);
    }


}

userArray.forEach((user, index) => {
    getUserInfo(user, index);
})

