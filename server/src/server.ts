import express = require("express");

const server = express();

// /api/current
server.get("/api/ok", (req, res, next) =>
{
    res.send({
        status: 200
    });
});

// catch-all - must be last
server.use((err, req: express.Request, res: express.Response, next: () => void ) => {
    console.log(err);

    res.statusCode = 500;
    res.statusMessage = "Interval Error";
    res.send();
});

server.listen(process.env.PORT || 9090, () => {
    console.log("ready");
});


// SIGKILL : can't be caught, ignored or blocked (> kill -9)
// SIGTERM : can be caught, ignore or blocked, terminate process if not blocked (> kill)
// SIGINT : can be caught, ignore or blocked (= Ctrl-c)

process.on("SIGTERM", () => {

    console.log("=== reveived SIGTERM ===");
    process.exit();
});

process.on("SIGINT", () => {

    console.log("=== reveived SIGINT ===");
    process.exit();
});
