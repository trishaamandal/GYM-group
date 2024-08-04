const WorkoutSessions = () => {
    return (
        <section className="workout_session">
            <div className="wrapper">
                <h1>TOP WORKOUT SESSION</h1>
                <p>
                    •Each exercise should be performed at maximum effort.
                    •Adjust the rest periods and exercise duration based on your fitness level.
                    •Ensure proper form to prevent injury and maximize effectiveness.
                    •Repeat the rounds as many times as desired for a longer workout.
                </p>
                <img src="/src/assets/images/img9.jpg" alt="workout" />
                <>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/lA-diBuGy6I?si=oYEWFtjOcyDuFfJy"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <h1> For You Workout Video ⬆ </h1>
                </>
            </div>
            <div className="wrapper">
                <h1>FEATURED BOOTCAMPS</h1>
                <p>The Beach Body Bootcamp offers a full-body workout on various beaches, combining cardio, bodyweight exercises, and core strengthening for all fitness levels. The Urban Bootcamp utilizes city parks and urban settings for high-intensity workouts, making use of stairs, benches, and hills. For those who love the outdoors, the Adventure Bootcamp blends hiking and trail running with strength and agility exercises in nature parks. The Military Style Bootcamp provides a rigorous regimen inspired by military training, featuring obstacle courses and endurance exercises to build physical and mental toughness. Fitness Fusion Bootcamp offers a mix of HIIT, strength training, yoga, and pilates in indoor gyms, focusing on different fitness components for a well-rounded approach. The Family Bootcamp is designed for families to work out together, promoting healthy habits and bonding with fun exercises. Lastly, the Corporate Bootcamp tailors workouts for busy professionals, featuring quick and effective exercises that can be done at office premises or nearby parks, enhancing team cohesion and fitness.
                </p>
                <div className="bootcamps">
                    <div>
                        <h4>HIIT (High-Intensity Interval Training)</h4>
                        <p>

                            Duration: 20-30 minutes
                            Benefits: Burns a lot of calories in a short time, improves cardiovascular fitness, and boosts metabolism.
                            Example: 30 seconds of burpees, 30 seconds rest, 30 seconds of squats, 30 seconds rest, repeat.
                        </p>
                    </div>
                    <div>
                        <h4>Yoga Flow</h4>
                        <p>
                            Duration: 45-60 minutes
                            Benefits: Enhances flexibility, reduces stress, and improves balance.
                            Example: Sun Salutations, Warrior series, and various poses focusing on breath and movement.
                        </p>
                    </div>
                    <div>
                        <h4> Strength Training</h4>
                        <p>Duration: 45-60 minutes
                            Benefits: Builds muscle mass, increases strength, and boosts metabolism.
                            Example: Deadlifts, squats, bench press, and bicep curls, with a focus on different muscle groups.

                        </p>
                    </div>
                    <div>
                        <h4>Cycling Class</h4>
                        <p>Duration: 45-60 minutes
                            Benefits: Great for cardiovascular endurance and leg strength.
                            Example: Spin class with intervals, hill climbs, and sprints.

                        </p>
                    </div>
                    <div>
                        <h4>Bootcamp Training</h4>
                        <p>Duration: 45-60 minutes
                            Benefits: Combines cardio, strength training, and functional movements.
                            Example: Circuit training with exercises like jump squats, push-ups, and kettlebell swings.

                        </p>
                    </div>
                    <div>
                        <h4>Pilates</h4>
                        <p>Duration: 45-60 minutes
                            Benefits: Improves core strength, flexibility, and posture.
                            Example: Reformer Pilates, mat Pilates with exercises like the Hundred, Roll-Up, and Leg Circles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutSessions;