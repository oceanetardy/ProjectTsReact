import {useFormik} from "formik";
import * as Yup from 'yup';
import React, {useState} from "react";
import {date} from "yup";

interface FormProps {
    onSubmit: (formData: FormData) => void;
}


interface FormData {
    user: any;
    name: string;
    detail: string;
    status: any;
    date: number;



}


const FormTask = ({ onSubmit }: FormProps) => {
    const [formData, setFormData] = useState<FormData>({
        user: "",
        name: "",
        detail: "ok",
        status: false,
        date: Date.now()
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({   user: "", name: "", detail: "", status: false, date: Date.now() });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User :
                <input
                    type="text"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                />
            </label>

            <label>
                Name :
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Details :
                <input
                    type="text"
                    name="details"
                    value={formData.detail}
                    onChange={handleChange}
                />
            </label>

            <label>
                Statut :
                <input
                    type="text"
                    name="statut"
                    value={formData.status}
                    onChange={handleChange}
                />
            </label>
            <label>
                Date :
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Envoyer</button>
        </form>
    );


}

export default FormTask;