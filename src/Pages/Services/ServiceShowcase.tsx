import { ServiceBox } from "./ServiceBox";
import { services } from "./ServiceConfig";

const ServiceShowcase = () => {
    return (
        <>
            {services.map((project, index) => (
                <ServiceBox key={index} title={project.title} goal={project.goal} actions={project.actions} outcome={project.outcome} />
            ))}
        </>
    );
};

export default ServiceShowcase;