import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Português', label: 'Português'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Geografia', label: 'Geografia'},
                            { value: 'História', label: 'História'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Química', label: 'Química'},
                            { value: 'Física', label: 'Física'},
                            { value: 'Música', label: 'Música'},
                            { value: 'Programação', label: 'Programação'},
                        ]}
                    />

                    <Select
                        name="week-day" 
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo'},
                            { value: '1', label: 'Segunda-Feira'},
                            { value: '2', label: 'Terça-Feira'},
                            { value: '3', label: 'Quarta-Feira'},
                            { value: '4', label: 'Quinta-Feira'},
                            { value: '5', label: 'Sexta-Feira'},
                            { value: '6', label: 'Sábado'},
                        ]}
                    />
                    <Input type="time" name="time" label="Hora"/>

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList