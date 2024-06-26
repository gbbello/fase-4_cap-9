const data = [
{
        "Title": "Multiphysics - THMC",
        "ShortDescription": "GeMA includes full THMC capabilities to handle geomechanical analysis.",
        "Description": "GeMA includes full THMC capabilities to handle geomechanical analysis, single-phase fluid flow, thermal analysis and reactive transport problems, among others, all of them based on the Finite Elements Method. The required physics can be strong or weakly coupled. It also supports multiple constitutive models for porous elastoplastic, damage and creep materials, as well as advanced formulations to represent fractures considering geomechanical effects. Combined, this physics support can be used to solve several problems such as Reservoir compaction, Fault reactivation, Modelling of flow corridors, Well stability analysis, Naturally fractured reservoirs, Hydraulic fracturing, Reactive transport and many more."
    },
    {
        "Title": "Strong and weak coupling",
        "ShortDescription": "GeMA does not dictate how multiple physics are coupled. Those decisions can be made by engineers according",
        "Description": "GeMA does not dictate how multiple physics are coupled. Those decisions can be made by engineers according to the scenario at hand. Physics coupling can be either strong (fully coupled), where all relevant physics equations are combined in a single equation system, or weak (loosely coupled), where each physics is solved individually with their interaction effects modeled by several possible user-defined coupling strategies (1-way, 2-way, etc), as defined by the simulation orchestration script."
    },
    {
        "Title": "Multiscale",
        "ShortDescription": "GeMA supports models featuring multiple domain discretizations (meshes) that can be used to simulate each physics process at its appropriate spatial and time scale. Data can be transferred between these distinct domains at the desired simulation steps. Several interpolation techniques, both meshfree and mesh- aware, can be used for transferring data with minimum error.",
        "Description": "GeMA supports models featuring multiple domain discretizations (meshes) that can be used to simulate each physics process at its appropriate spatial and time scale. Data can be transferred between these distinct domains at the desired simulation steps. Several interpolation techniques, both meshfree and mesh- aware, can be used for transferring data with minimum error."
    },
    {
        "Title": "Support for multiple discretization methods",
        "ShortDescription": "Although most GeMA simulations are based on the Finite Elements Method, the framework is discretization method agnostic and supports other paradigms that can be made available with additional plugins..,",
        "Description": "Although most GeMA simulations are based on the Finite Elements Method, the framework is discretization method agnostic and supports other paradigms that can be made available with additional plugins, in the same way as the FEM model is implemented. Some exercises have already been done with finite differences and discrete element methods."
    },
    {
        "Title": "Configurable orchestration",
        "ShortDescription": "GeMA supports models featuring multiple domain discretizations (meshes) that can be used to simulate each physics process at its appropriate spatial and time scale.",
        "Description": "In a GeMA simulation, the orchestration script defines the applied solution method, or how we combine the available processes to simulate the given model. This script is written in Lua, an interpreted language specially built to be embedded into applications, allowing them to dynamically run user-provided programs. It is considered a simple, easy-to-learn language that includes some powerful concepts and is also seen as one of the fastest available interpreted languages. At the orchestration script, the user has access to all of the simulation data and is able to perform complex initializations, combine existing simulation methods with user-given calculations, define the coupling strategy for loosely coupled multiphysics simulations, define the steps where data should be transferred between meshes or written to disk, or even perform integration steps with external simulators."
    },
    {
        "Title": "Easy modelling with Jade",
        "ShortDescription": "Although most GeMA simulations are based on the Finite Elements Method, the framework is discretization method agnostic and supports other paradigms.",
        "Description": "Building complex simulation models by hand, which includes defining meshes, boundary conditions, material properties, the orchestration script, etc., can be a time-consuming task. The Jade analysis and design environment can be used for effortlessly creating GeMA simulation models based on pre-defined templates. The generated models include everything needed to execute a GeMA simulation, from complex meshes created by importing layer surfaces, passing through several types of well-data-driven boundary conditions to the orchestration scripts for different simulation scenarios. Another, more traditional, option for model creation is the use of the Gid pré-processor together with the Gid2GeMA plugin. In the near future, Jade will also have the capability to monitor GeMA simulations, presenting in real-time the values of user-chosen simulation variables."
    },
    {
        "Title": "Machine learning",
        "ShortDescription": "",
        "Description": ""
    },
    {
        "Title": "Plugin based",
        "ShortDescription": "The GeMA architecture is based on well-defined interfaces, together with plugins implementing those interfaces...",
        "Description": "The GeMA architecture is based on well-defined interfaces, together with plugins implementing those interfaces to provide the application with its modeling capabilities. Plug-ins range from the mesh implementation to the available modeling processes and physics tied to them. This architecture, combined with the configurable orchestration, is the base for the framework&#39;s extensibility. Using plugins implementing well-defined interfaces also guarantees a high degree of modularization and uncoupling between system modules, features that, together with a strong set of regression tests, are crucial for creating an environment capable of evolving without decreasing its long time reliability."
    },
    {
        "Title": "Integration with external simulators",
        "ShortDescription": "GeMA simulations can be integrated with external simulators in two distinct ways.",
        "Description": "GeMA simulations can be integrated with external simulators in two distinct ways. In the first one, the external simulator is seen as a black box and data is transferred between GeMA and the simulator by way of auxiliary files, written in the simulator’s own format. Those transfers are usually timed and executed by the orchestration script itself, together with data transfer between meshes when needed. For simulators that include a public API, the coupling can be done more efficiently at the process or physics plugin levels. The black-box method has been successfully used for integration with the industry standard IMEX black oil reservoir simulator and with the GeoFlux3D simulator. The API method is used by the reactive transport physics plugin to integrate with the Phreeqc simulator."
    },
    {
        "Title": "User functions and materials",
        "ShortDescription": "A GeMA simulation model can include multiple user-defined functions.",
        "Description": "A GeMA simulation model can include multiple user-defined functions. Written in Lua, those functions can be used to create additional node, cell, or integration point data, as well as provide dynamic values for boundary conditions and user materials whose properties depend on the simulation state. Alternative material laws can also be defined in the model, being an excellent choice for studying possible future material implementations."
    },
    {
        "Title": "Snapshots and simulation restart",
        "ShortDescription": "The GeMA framework can take snapshots of the simulation state at user-defined steps in the orchestration script.",
        "Description": "The GeMA framework can take snapshots of the simulation state at user-defined steps in the orchestration script. In the event of an unexpected failure, or if the simulation was interrupted by the user, those snapshots can be used to later resume the simulation at the saved step, without the need to restart the whole simulation."
    }
];
