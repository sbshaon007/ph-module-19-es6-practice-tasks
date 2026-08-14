const applyBonusPoints = (users, bonus) => {

    const updatedUser = users.map(user => {

        return { ...user, points: user.points + bonus };

    });

    return updatedUser;
}

let users = [{ name: "Rafi", points: 20 }], bonus = 5;

console.log(applyBonusPoints(users, bonus));
