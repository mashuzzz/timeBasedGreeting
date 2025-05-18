let userName = prompt("Как тебя зовут?");
        if (userName === null || userName === "") {
            userName = "Гость";
        }

        function updateGreetingAndTime() {
            let now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            let greeting;
            let timeClass;

            if (hours >= 0 && hours < 4) {
                greeting = "Доброй ночи";
                timeClass = "night";
            } else if (hours < 12) {
                greeting = "Доброе утро";
                timeClass = "morning";
            } else if (hours < 18) {
                greeting = "Добрый день";
                timeClass = "day";
            } else {
                greeting = "Добрый вечер";
                timeClass = "evening";
            }

            let time = `${hours}:${minutes}:${seconds}`;
            document.getElementById("output").innerHTML = `${greeting}, ${userName}! Сейчас ${time}`;
            document.body.className = timeClass;
            document.getElementById("output").style.color = timeClass === "night" ? "#ffffff" : "#333";
        }

        setInterval(updateGreetingAndTime, 1000);
        updateGreetingAndTime();

        let changeNameBtn = document.getElementById("changeNameBtn");
        changeNameBtn.onclick = function() {
            let newName = prompt("Как тебя зовут?");
            if (newName === null || newName === "") {
                userName = "Гость";
            } else {
                userName = newName;
            }
            updateGreetingAndTime();
        };



