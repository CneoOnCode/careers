import React from "react";
import "../App.css";
function University() {
  return (
    <div>
      <header className="App-header-noce">
        <div className="content">
          <h1>
            University KPU
            <hr></hr>
          </h1>
          <br></br>
          <p>
            <img src={require("./../Images/KPUCam.jpg")} className="small" />
            KPU (Kwantlen Polytechnic University) is a University in Canada, BC.
            They are located in Richmond, Cloverdale, Whally, and Langley making
            it really accessible to many different people from different places.
            This University has been around for 1981. Its quite a new school!
          </p>
          <br></br>
          <h1>
            History
            <hr></hr>
          </h1>
          <p>
            In keeping with local protocols, we wish to express our gratitude to
            the q̓ʷɑ:n̓ƛ̓ən̓ (Kwantlen), xʷməθkwəy̓əm (Musqueam), q̓ic̓əy̓ (Katzie),
            SEMYOME (Semiahmoo), sc̓əwaθən (Tsawwassen), qiqéyt (Qayqayt), and
            kʷikʷəƛ̓əm (Kwikwetlem) Peoples. We recognize that our work at
            Kwantlen Polytechnic University takes place on the territories of
            these First Nations, who have cared for these lands since time
            immemorial. As part of this acknowledgement, we hold ourselves
            accountable to participating in the work of decolonization,
            reconciliation, and Indigenization at KPU and in our communities.
            KPU is a school that respects the aboriginal and other heritage
            culture.
          </p>
          <br></br>
          <h1>
            Details on the CS(Computer Science) course
            <hr></hr>
          </h1>
          <p>
            <img src={require("./../Images/JavaMeme.png")} className="small" />
            As KPU does have Computer Science courses, you will be learning both
            Java and C#. As you can see from this meme, this is made from a KPU
            student that has gone out of his way to explain what it is like
            studying at KPU in your first two years. They have this really cool
            year plan where it is a 2 + 2 method. Basically you have two years
            of learning and two years of internships this is a good balance of
            work and studies.
          </p>
          <h1>
            Prices
            <hr></hr>
          </h1>
          <p>
            The price of tuition here is around 2000$ a year. Making it quite
            the cheapest around the world.
          </p>{" "}
          <h1>
            Admission Requirements
            <hr></hr>
          </h1>
          <p>
            KPU has among one of the highest acceptence rate. It is over 50% and
            if your heading for Computer Science you don't need those funky Pre
            Calculas grades and other perfect GPA grades all you need is Math 11
            foundations over C+ and your good.
          </p>
          <br></br>
          <h1>
            Day in a life
            <hr></hr>
          </h1>
          <br></br>
          <p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XwMrDJEa0io"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </p>{" "}
          <br></br>
          <h1>
            Why I chose this University?
            <hr></hr>
          </h1>
          <br></br>
          <p>
            As the reason above should have summed up why but I have to take
            consider that this university has a really good graduation rate and
            acceptance rate therefore makes it a good school. Not only that the
            price is really accessible. I also have noticed that the Richmond
            campus is right behind Lansdowne therefore making it able to get
            food easier.
          </p>
        </div>
      </header>
    </div>
  );
}
export default University;
