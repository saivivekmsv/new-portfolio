import {ProjectContainer} from "../../containers";

function ProjectLayout(props) 
{
    return (
        <div className="projects-layout">
          <ProjectContainer {...props} />
        </div>
      );
}



export default ProjectLayout;