import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Topic() {
  const [topicList, setTopicList] = useState([]);

  const [topic, setTopic] = useState('');

  const fetchtopic = () => {
    let url = 'http://127.0.0.1:8000/ProblemCreation/topic';
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopicList(data));
  };

  useEffect(() => {
    fetchtopic();
  }, []);

  //   useEffect(() => {
  //     // GET request using fetch inside useEffect React hook
  //     fetch('http://localhost:8000/topic')
  //       .then((response) => response.json())
  //       //   .then((data) => setTotalReactPackages(data.total));
  //       .then((data) => console.log(data));

  //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
  //   }, []);

  const handleOnchnage = (event) => {
    setTopic(event.target.value);
  };
  console.log(topic);

  const handleOnClick = () => {
    const lastele = myArray[0];
    const lastelem = lastele[lastele.length - 1][0] + 1;
    console.log(lastelem, topic);
    axios
      .post('http://127.0.0.1:8000/ProblemCreation/topic', {
        TopicID: lastelem,
        TopicName: topic,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const myArray = Object.values(topicList);
  console.log(myArray);
  return (
    <>
      <div className="container my-3">
        <h2>Topic</h2>
        <input type="text" onChange={handleOnchnage} />
        <button
          onClick={handleOnClick}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          POST
        </button>
      </div>

      <div className="container">
        {myArray.map((ele) => {
          return ele.map((a) => {
            return (
              <>
                <div className="container my-3" key={[ele]}>
                  {a[0]} {a[1]}
                </div>
              </>
            );
          });
        })}
      </div>
    </>
  );
}

export default Topic;

// a = [
//     [a,h],
//     [d],
//     [d],
//     [f]
// ]
