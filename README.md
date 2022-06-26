<h1 align="center">CoDev</h1>
<h2 align="center">Collaborate with some of the best developers around the world</h2>
<!-- <h3 align="center">Live at https://uno-online-multiplayer.herokuapp.com</h3> -->

<!-- <img src="client/src/assets/logo.png" alt="UNO Logo" width="33%" align="center" /> -->

## 🤔 What is CoDev?

CoDev is a social media platform wherein the users can register themselves with their email ids and provide us their github id. We will seamlessly fetch all of his github achievements to showcase it on our profile page. We can view the profiles of other amazing developers and **Collaborate** with them to initiate a chat and discuss any thing related to tech or otherwise😉. Tired of seeing the same user again and again? The users can even **Pass** the user and we do make sure to never show his/her profile again unless you change your mind.

## 💡Inspiration

Me and my team member Puja Saraf have always been a hackathon enthusiast. One problem we always ran into was finding the perfect team members for our hacks. We do have some amazing ideas to implement but the required tech stacks sometimes goes out of our bounds. Registering for a hackathon and then forming a team then and there isn't something for us. We'd prefer planning our projects beforehand and get to know our team mates better.
That's when we came up with CoDev.

## ❓ About CoDev

This website was built with [React](https://reactjs.org/), [Express](https://expressjs.com/) and [Node](https://nodejs.org/en/). It also has text chat functionality to communicate with fellow developers!

<!-- [How I Made This Game](https://www.youtube.com/watch?v=FBAJdbpFnjs) -->

## 🧐 How to Use?

1. Once you're on the homepage you can either login with an existing one or signup with a new email id
2. You will now be redirected to a create profile page where in you can fill the required details to get started.
3. Once done with this you will see a list of developers and you can **Collaborate** or **Pass** any user.
4. You can initiate a chat with the users you chose to collaborate with

## 🎮 Screenshots

<img src="screenshots/Screenshot-1.png" alt="Screenshot 1" width="75%" align="center" /><br/>

<img src="screenshots/Screenshot-2.png" alt="Screenshot 2" width="75%" align="center" /><br/>

<img src="screenshots/Screenshot-3.png" alt="Screenshot 3" width="75%" align="center" /><br/>

<img src="screenshots/Screenshot-4.png" alt="Screenshot 4" width="75%" align="center" /><br/>

<img src="screenshots/Screenshot-5.jpg" alt="Screenshot 5" width="75%" align="center" /><br/>

## 🏁 Getting Started (to run locally)

Follow the steps below, after cloning the repository:

### 🖐 Requirements

**For Installing:**

- Node

**For Running:**

- Create a .env file inside the backend folder and then delcare the following two variables inside it
  - PASSWORD="Your atlas password"
  - USER="your atlas username"

### ⏳ Installation

- At the root of the project directory, use npm to install the server-side dependencies

```bash
cd backend
npm install
```

This command installs all the server-side dependencies needed for the game to run locally.

- Use npm to run server

```bash
npm start
```

This command gets the server running on localhost port 8000.

- In a separate terminal, navigate into the frontend folder and use npm to install the client-side dependencies

```bash
cd client
npm install
```

This command installs all the client-side dependencies needed for the game to run locally.

- Finally, use npm to run client

```bash
npm start
```

This command gets the client running on localhost port 3000.

Head over to http://localhost:3000/ and enjoy! 🎉

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. The **Issues** tab is a good place to begin!

1. Fork the project repo
2. Clone the forked repo on your machine
3. Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch on your forked repo (`git push origin feature/AmazingFeature`)
6. Open a pull request
