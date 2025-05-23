const materialsDB = [
    {
        id:1,
        approved: true,
        icon:'solid',
        material_name:'Сталь (магистральная труба)',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'56',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'7800',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'460',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'56',
        density:'7800',
        heat_capacity_at_constant_pressure: '460',
    },
    {
        id:2,
        icon:'liquid',
        material_name: 'Вода',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.606',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'1000',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'4200',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.606',
        density:'1000',
        heat_capacity_at_constant_pressure:'4200',
        approved: true,
    },
    {
        id:3,
        icon:'solid',
        material_name: 'Монтажная пена ППУ',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.035',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'50',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'1256',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.035',
        density:'50',
        heat_capacity_at_constant_pressure:'1256',
        approved:false,
    },
    {
        id:4,
        icon:'solid',
        material_name: 'Медь',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'398',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'8960',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'385',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'398',
        density:'8960',
        heat_capacity_at_constant_pressure:'385',
        approved:false,
    },
    {
        id:5,
        icon:'gas',
        material_name: 'Воздух',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.0257',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'1.204',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'1005',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.0257',
        density:'1.204',
        heat_capacity_at_constant_pressure:'1005',
        approved:false,
    },
    {
        id:6,
        icon:'solid',
        material_name: 'Изоляция кабеля PE',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.35',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'940',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'2100',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.35',
        density:'940',
        heat_capacity_at_constant_pressure:'2100',
        approved:false,
    },
    {
        id:7,
        icon:'solid',
        material_name: 'Изоляция кабеля ПВХ',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.18',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'1350',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'1150',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.18',
        density:'1350',
        heat_capacity_at_constant_pressure:'1150',
        approved:true,
    },
    {
        id:8,
        icon:'solid',
        material_name: 'Изоляция кабеля каучуковая',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.2',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'1300',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'1350',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.2',
        density:'1300',
        heat_capacity_at_constant_pressure:'1350',
        approved:true,
    },
    {
        id:9,
        icon:'solid',
        material_name: 'Изоляция кабеля СПЭ (сшитый полиэтилен)',
        properties:[
            {
                label:'Теплопроводность',
                name:'thermal_conductivity',
                xmlName:'thermalconductivity',
                value:'0.35',
                unit:'Вт/(м·K)',
            },
            {
                label:'Плотность',
                name:'density',
                xmlName:'thermalconductivity',
                value:'950',
                unit:'кг/м³',
            },
            {
                label:'Теплоёмкость при постоянном давлении',
                name:'heat_capacity_at_constant_pressure',
                xmlName:'heatcapacityatconstantpressure',
                value:'1650',
                unit:'Дж/моль·К',
            }
        ],
        thermal_conductivity:'0.35',
        density:'950',
        heat_capacity_at_constant_pressure:'1650',
        approved:false,
    },

]

export default materialsDB;