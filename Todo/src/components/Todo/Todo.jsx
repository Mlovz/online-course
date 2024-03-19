import cls from "./todo.module.css";
import img from "../assets/plus.svg";
import { useState } from "react";
import Card from "../Card/Card";
import board from "../assets/Clipboard.svg";

const Todo = () => {
  const [value, setValue] = useState("");
  const [toods, setToods] = useState([]);

  const handleOnChangeValue = (e) => {
    setValue(e.target.value);
  };

  const addToods = () => {
    if (!value.trim()) return;

    const newToods = {
      id: toods.length + 1,
      text: value,
      isCompleted: false,
    };

    setToods([...toods, newToods]);
    setValue("");
  };

  const handleIsCompleted = (id) => {
    const newTodo = toods.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setToods(newTodo);
  };

  const deleteTodo = (id) => {
    const newTodos = toods.filter((todo) => todo.id !== id);
    setToods(newTodos);
  };

  const todoActiv = toods.filter((todo) => todo.isCompleted);
  const todoNoActiv = toods.filter((todo) => !todo.isCompleted);

  return toods.length > 0 ? (
    <div className={cls.todo}>
      <div className={cls.form}>
        <div className="row">
          <input
            className={cls.input}
            type="text"
            placeholder="Добавить новую задачу"
            onChange={handleOnChangeValue}
            value={value}
          />
          <button className={cls.btn} onClick={addToods}>
            Создать
            <img src={img} alt="" />
          </button>
        </div>
        <div className={`${cls.formResult} row`}>
          <div>
            <p className={cls.save}>Сохраненные задачи</p>
            <span className={cls.noActiv}>{todoNoActiv.length}</span>
          </div>
          <div>
            <p className={cls.finish}>Завершенные</p>
            <span className={cls.activ}>
              {todoActiv.length} из {toods.length}
            </span>
          </div>
        </div>
      </div>
      <div className={cls.list}>
        {toods.map((todo) => (
          <Card
            deleteTodo={deleteTodo}
            handleIsCompleted={handleIsCompleted}
            value={value}
            key={todo.id}
            {...todo}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className={cls.todo}>
      <div className={cls.form}>
        <div className="row">
          <input
            className={cls.input}
            type="text"
            placeholder="Добавить новую задачу"
            onChange={handleOnChangeValue}
            value={value}
          />
          <button className={cls.btn} onClick={addToods}>
            Создать
            <img src={img} alt="" />
          </button>
        </div>
        <div className={`${cls.formResult} row`}>
          <div>
            <p className={cls.save}>Сохраненные задачи</p>
            <span className={cls.noActiv}>{todoNoActiv.length}</span>
          </div>
          <div>
            <p className={cls.finish}>Завершенные</p>
            <span className={cls.activ}>
              {todoActiv.length} из {toods.length}
            </span>
          </div>
        </div>
      </div>
      <div className={cls.todoHome}>
        <img src={board} alt="" />
        <h1>
          У вас еще нет зарегистрированных задач Создавайте задачи и организуйте
          свои дела
        </h1>
      </div>
    </div>
  );
};

export default Todo;
