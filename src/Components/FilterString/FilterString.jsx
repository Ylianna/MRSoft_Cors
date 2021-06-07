import React from "react";
import style from "./FilterString.module.css";
import {useEffect, useState} from "react";
import * as axios from "axios";

const FilterString = React.memo(() => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [inputData, setInputData] = useState('');
    const [checkboxValue, setCheckboxValue] = useState('i');

    let textInput = inputData ? 'Данные введены' : '';

    const url = 'http://www.mrsoft.by/data.json';

    const inputDataValue = (event) => {
        const inputValue = event.target.value;

        setInputData(inputValue);
        checkboxValue === 'i' ? setInputData(inputValue) : setInputData(inputValue);
    };

    const buttonWordLength = () => {

        if (inputData.length >= 1 && !+isNaN(inputData)) {
            const result = data.filter(word => word.length > inputData);

            if (checkboxValue === '') {
                const regExpUpperCase = new RegExp(/([A-Z])\w+/g);
                const resultUpperCase = result.filter(item => regExpUpperCase.test(item));

                setFilterData(resultUpperCase);

            } else if ((checkboxValue === 'i')) {
                setFilterData(result);
            }
        } else {
            if (!inputData.length || +isNaN(inputData)) {
                alert('Введите число');
            }
        }
    };

    const ButtonSubstring = () => {
        if (inputData.length >= 1 && isNaN(inputData)) {
            const regExp = new RegExp(inputData, `${checkboxValue}`);
            const searchResult = data.filter(word => regExp.test(word));

            setFilterData(searchResult);
        } else {
            if (!isNaN(inputData)) {
                alert('Введите буквы');
            }
        }
    };

    const toggleCheckbox = () => {
        checkboxValue === 'i' ? setCheckboxValue('') : setCheckboxValue('i');
        checkboxValue === '' ? setInputData(inputData) : setInputData(inputData);
    };

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/${url}`).then(data => {
            setData(data.data.data);
        })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [
        inputData, checkboxValue
    ]);

    return (
        <div>
            <div className={style.container}>
                <h1 className={style.h1}>Тестовое задание</h1>
                <div className={style.containerValue}>
                    <div className={style.inpChe}>
                        <h4>Ввод данных</h4>
                        <label>
                            <input id="text-data" type="text" className={style.input}
                                   placeholder="Введите слово или число"
                                   onChange={inputDataValue} value={inputData}
                            />
                            <span>{textInput}</span>
                            <div>
                                <input type="checkbox"
                                       onChange={toggleCheckbox}
                                />
                                <span>чувствительность регистра</span>
                            </div>
                        </label>
                    </div>

                    <div className={style.sortData}>
                        <div>
                            <div>Сортировка данных</div>
                        </div>
                        <div>
                            <button
                                className={style.button}
                                onClick={buttonWordLength}
                            >По длине слов
                            </button>
                            <button className={style.button}
                                    onClick={ButtonSubstring}
                            >По подстроке
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {filterData.length > 0 &&
            <div>
                <h4>Результат:</h4>

                <div className={style.listData}>
                    <ol>
                        {filterData.map((item) =>
                            <li key={item} className="flow-text">{item}</li>
                        )
                        }
                    </ol>
                </div>
            </div>}

        </div>
    )
})

export default FilterString;