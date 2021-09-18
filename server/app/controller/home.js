class HomeController{
    getHome = (req, res) => {
        res.send('Hello World!')
    }
}

module.exports = new HomeController();