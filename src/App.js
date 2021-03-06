import './App.css';


function ContactMe() {
  return(
    <div style={{display: 'inline-block'}}>
      <a href="https://www.linkedin.com/in/christian--williams/">linkedIn  </a>
      <a href="https://github.com/chriswill88">Github  </a>
      <a href="https://twitter.com/ChrisWill79">Twitter</a>
    </div>
  )
}

function Picture() {
  return (
    <div style={{width: 400, height: 400, borderRadius: 200}}>
      <img src='https://avatars.githubusercontent.com/u/46333279?s=400&u=5899fa8b0fd6bc1da8ed59c644c20397b6133c23&v=4' alt='avatar'/>
    </div>
  )
}

const obj = [
  {id: 1, titles: 'Rocket Riders', imgUrl: 'https://user-images.githubusercontent.com/51524966/77604145-2dea0180-6ee8-11ea-879a-60d725c40006.jpg', description: 'Rocket Riders is a quirky game created by Team Synergy(Chris Williams, William Dyrland-Marquis, and Faizan Khan) designed to bring people together through the pursuit of decimating the alien horde which threatens us alien Rocket Riders allows up to 2 players video_game to team up and use their respective ships to attack the enemies, which fill up the screen quickly.', url: 'https://github.com/maybe-william/RocketRiders'},
  {id: 2, titles: 'Simple Shell', imgUrl: 'https://media.giphy.com/media/65n8RPEa3r65q/giphy.gif?cid=ecf05e47mvawtij8uejtkcgkgpqd52b6c4t4487wyi6k2niu&rid=giphy.gif&ct=g', description: 'We create a shell called hsh. We made it closely resemble sh.', url: 'https://github.com/chriswill88/simple_shell'},

  ]

function Portfolio({imgUrl, description, url, titles}) {
  return (
    <div>
      <h3>{titles}</h3>
      <img src={imgUrl} alt='project'/>
      <p>{description}</p>
      <a download src={url}>link to project</a>      
    </div>
  )
}

function Resume() {

  return (
    <div>
      <a href='https://media-exp1.licdn.com/dms/image/C4D2DAQHm0xMUWXp7eA/profile-treasury-image-shrink_8192_8192/0/1624216395322?e=1631422800&v=beta&t=bdmlwDRw5cKxKjD-dPqRnQWfKQ2AWiSoJJaQMt-5DII'><img src='https://media-exp1.licdn.com/dms/image/C4D2DAQHm0xMUWXp7eA/profile-treasury-image-shrink_8192_8192/0/1624216395322?e=1631422800&v=beta&t=bdmlwDRw5cKxKjD-dPqRnQWfKQ2AWiSoJJaQMt-5DII' alt='pdf resume' style={{width: 800}}/></a>
    </div>
  )
}

function AboutMe() {
  return (
    <div style={{ }}>
      <h2> About Me</h2>

      <div>
        <h3>Motivation</h3>
        <ol>
          <li>I am motivated by how much better I can be, I am motivated to learn new things and become proficient at them.</li>
          <li>There are so many things I could do better. I want to come to know how great life could be for myself and for others if I had things in order. I can grow and even though I falter at times it is motivating to know that I can become better. I find that deeply empowering.</li>
          <li>As a software engineer I will bring a spirit of conscientiousness, diligence, and curiosity  into my work place. This motivation will keep me putting my best foot forward and it will  allow me to keep on improving.</li>
        </ol>
      </div>

      <div>
        <h3>Personal Story</h3>
        <p>
        I am Christian Williams, I have moved around pretty much all my life so I never really had the chance to make childhood friends or anything like that, but this was a benefit because I had the chance to meet and interact with many different types of people from different backgrounds and struggles. It has humbled me to interact to have the privilege of interacting with so many in the sense that this experience has made me realize that I don???t know too much about people and that there is no such thing as a type of person that doesn???t exist. In other words, any type of person can exist, any type that you can imagine can and probably does exist or will exist in the future or did exist in the past. This single fact alone has opened my eyes to the fact that people are very interesting and that it is important to treat people like they have something that they can teach you.


Before Holberton when I was going to college, I founded the music club because I wanted to give students the chance to learn musical instruments, communicate with music, and jam. Throughout my life music has been something I have been very consistent with as a hobby. I love playing, listening to, and creating music. It was something that has given me a ton of peace throughout my life. That said, college can be very stressful and toxic for students growing up and figuring things out so it's important to have avenue to let off the toxic stress you could be storing.

Our club grew very fast and it eventually won an award before I decided to leave the school for Holberton. Because of the start, I had with that club I quickly learned that more needed to be done, so I became more involved: I assisted other student leaders that wanted to found their own clubs, and helped them with the logistics behind getting a club started, setting up meetings, and the financial component of clubs, I also went on to take up officer roles in various clubs and I went on to become the treasurer of student government.

A lot of students joined our club and we hosted some concerts and impromptu jam sessions in our school hallway, this ended up benefiting a ton of students that didn't really have anywhere to go and that were depressed. It ended up being the hub for a majority of the fun and meaningful moments with music. It is a beautiful thing to know that I had a direct part in all that happened.
        </p>
      </div>

      <div>
        <h3>Self Synopsis</h3>
        <p>
        I am a software engineer. I have been working with js, react, python, and C recently. I am super comfortable with most of the languages I know. I have been recently working with python to program lcd???s.

I am a person that is focused on making sure I make the most out of where I land, when Holberton came to new haven it was a no-brainer for me to stop wasting my time at the college i was going to so i left and joined the school to learn and code as well. I have recently won the summer PlayStation hackathon, i owe it to this school for providing me with the curriculum so that I could learn how to code properly enough to be very useful.

I plan to be a social software engineer, I will impact my teammates by offering them encouragement and diligent effort. I am motivated by the realization that there is so much more to learn and I have so much more to grow. I am motivated by being able to push myself forward and helping others to realize that they should continue pushing forward as well. 
        </p>
      </div>
    </div>
  )
}


function App() {
  return (
    <div style={{backgroundColor: 'black', padding: '10%', color: 'white'}}>
      <h1 style={{textAlign: 'center'}}>Christian Williams</h1>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <Picture />
      </div>
      <AboutMe />
      {
        obj.map(i => <Portfolio key={i.id} imgUrl={i.imgUrl} titles={i.titles} description={i.description} url={i.url}/>)
      }
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
