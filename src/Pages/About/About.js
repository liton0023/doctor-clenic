import React from 'react';
import logo from '../../images/profile.jpg'

const About = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 mt-10">

                <div className="ml-5">
                    <h1 className='text-7xl'>Rs Mahmud</h1>
                    <h1 className="font-bold text-5xl text-left pb-5 ">My <span className="text-red-700 underline ">Story</span></h1>
                    <h5 className=" text-4xl pb-5">There are Good Reason to My Goal</h5>
                    <p className="text-justify pb-5">Now I am Study In Dep. of Math Govt. k.c College,Jhendeinha.My Goal is different.Now i am contious Programming hero web dev course.This is great course forever.Speachilly Jhonker Mahmub Via amazing man leachen every topic very easilly.Now My Goal continu wev devlopment Course And To heard working for contibuite my wise world web devlopment services.That they can remember for ever .And i am say every Poor studen they con not continu their study for money.I say their you con not weast your time,learn  web devlopment and go to work different wey. .</p>
                    <p >No Pain, No gain: <br />
                        Have Patience! Work Hard! YOu will surprise yourself, and eventually, you will be proud of yourself.</p>
                </div>
                <img className="lg:pl-20 pl-5" src={logo} alt="" />
            </div>
        </div>
    );
};

export default About;