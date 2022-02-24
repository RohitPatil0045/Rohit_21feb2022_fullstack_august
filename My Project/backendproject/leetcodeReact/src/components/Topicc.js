// arr = [[1,2],[3,4],[5,6],[7,8]]

// // arr.map((ele,index)=>{
// //   // return ele.map ((aa)=>{[]
// //     return console.log(ele[0],index)

// //   })
// // // })
// const lastele = arr[arr.length - 1][0]
// console.log(lastele)

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