import "../index.css";

export default function CalCard({ calory, food, id, setData, data }) {
  const deleteEle = (e) => {
    const modifiedData = data.filter((ele) => ele.id !== id);
    setData([...modifiedData]);
  };
  return (
    <div className="Card">
      <div className="action">
        <h1>{food && food}</h1>
        <button onClick={deleteEle}>Delete</button>
      </div>
      <h2>you have consumed {calory && calory} cals today</h2>
    </div>
  );
}
