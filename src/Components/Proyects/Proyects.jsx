import React from 'react'
import { proyectos } from '../../../asyncmock'
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import './Proyects.css'


const Proyects = () => {
  return (
    <>
    <div>
      <h1 className='titulo_proyectos'>Proyectos</h1>
    </div>
    <div className='contenedor_proyectos'>
      {
      proyectos.map((proyecto) => (
          <Card className='tarjeta_proyectos' key={proyecto.id}>
            <CardHeader>
              <a href={proyecto.web} target='_blank'><h2 className='title'>{proyecto.name}</h2></a>
            </CardHeader>
            <Divider/>
            <CardBody>
              <a href={proyecto.web} target='_blank'><p className='desc'>{proyecto.desc}</p></a>
            </CardBody>
            <Divider/>
            <CardFooter>
              <p className='tech'>{proyecto.tech}</p>

            </CardFooter>
            <Divider/>
            <CardFooter>
              <p className='year'>{proyecto.year}</p>
            </CardFooter>
          </Card>
        ))}
    </div>
    </>
  )
}

export default Proyects
