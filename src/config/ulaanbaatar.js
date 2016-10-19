export const UlaanbaatarConfig = {
  map: {
    basemaps: {
      default: {
        url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        title: 'MAP_DEFAULT_TITLE',
        options: {
          attribution: 'MAP_OSM_ATTRIBUTION',
          maxZoom: 19
        }
      },
      alternative: [{
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
        title: 'MAP_ARCGIS_WORLD_TOPO_MAP_TITLE',
        options: {
          attribution: 'MAP_ARCGIS_WORLD_TOPO_MAP_ATTRIBUTION',
          maxZoom: 19
        }
      }, {
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        title: 'MAP_ARCGIS_WORLD_IMAGERY_TITLE',
        options: {
          attribution: 'MAP_ARCGIS_WORLD_IMAGERY_ATTRIBUTION',
          maxZoom: 19
        }
      }]
    },
    overlays: [],
    options: {
      zoomControl: false
    },
    view: {
      center: [47.8864, 106.9057],
      zoom: 8
    }
  },
  mapSections: {
    people: {
      title: 'PEOPLE_HEADER',
      icon: 'icon-group',
      table: 'khoroos',
      visualizations: [{
        id: 'ed837029-3d95-45b0-9218-2f2a236a094f',
        field: 'pop_2015',
        title: 'MAP_VIS_UB_POP'
      }, {
        id: 'b1812f9c-2099-45e8-b7f5-79118b43cd0d',
        field: 'PCHN1115',
        title: 'MAP_VIS_UB_POP_CHANGE'
      }, {
        id: '45c85583-f054-449f-b814-17bffa3f4209',
        field: 'DENS15',
        title: 'MAP_VIS_UB_POP_DENSITY'
      }, {
        id: '8452a599-6f91-482d-8efc-2ced847de329',
        field: 'P05_15PC',
        title: 'MAP_VIS_UB_POP_PCT_ZERO_FIVE'
      }, {
        id: '6fe91905-9d85-43ff-8db5-7fb244d91642',
        field: 'P615_15PC',
        title: 'MAP_VIS_UB_POP_PCT_SIX_EIGHTEEN'
      }, {
        id: 'fd9d9aa8-3a94-4221-8df3-1b6f114354d2',
        field: 'P60_15PC',
        title: 'MAP_VIS_UB_POP_PCT_SIXTY_PLUS'
      }, {
        id: '4c7c765a-8b1b-11e6-b919-0ee66e2c9693',
        field: 'P60CH',
        title: 'MAP_VIS_UB_POP_PCT_CHANGE_SIXTY_PLUS'
      }, {
        id: '00a6deeb-0db4-4d2c-a986-e7cd78c8cb2a',
        field: 'KINDCHN',
        title: 'MAP_VIS_UB_CHANGE_KINDERGARTEN'
      }, {
        id: '05fd9fe2-75a1-4222-b0bc-7b298487ae84',
        field: 'SCHCHN',
        title: 'MAP_VIS_UB_CHANGE_PRIMARY'
      }]
    },
    households: {
      title: 'HOUSEHOLDS_HEADER',
      icon: 'icon-bus',
      table: 'khoroos',
      visualizations: [{
        id: '6418ee08-8667-4724-9092-d44c08d86894',
        field: 'HH15',
        title: 'MAP_VIS_UB_HSHD_COUNT'
      }, {
        id: '0631c3cf-4579-492e-af88-991b9d789575',
        field: 'POORHHCHN',
        title: 'MAP_VIS_UB_POOR_HSHD_COUNT_CHANGE'
      }, {
        id: 'd019728c-106a-4754-b239-91098c9eb089',
        field: 'POORHHPC',
        title: 'MAP_VIS_UB_POOR_HSHD_PCT'
      }]
    },
    employment: {
      title: 'EMPLOYMENT_HEADER',
      icon: 'icon-briefcase',
      table: 'khoroos',
      visualizations: [{
        id: 'f6f40227-3702-4bbf-88f1-fb552b78c7be',
        field: 'P1959CHN',
        title: 'MAP_VIS_UB_CHANGE_WORK_AGE'
      }, {
        id: '0297f17f-8981-488c-ad91-f66556a129e9',
        field: 'P1959_15PC',
        title: 'MAP_VIS_UB_PCT_WORKING_AGE'
      }, {
        id: '00ec43b7-cdb5-4483-aaa1-0a634f857e25',
        field: 'EMPCHN',
        title: 'MAP_VIS_UB_CHANGE_EMPLOYMENT'
      }, {
        id: 'afceb9da-4509-4cfa-84dc-488112b96371',
        field: 'UNEMCHN',
        title: 'MAP_VIS_UB_CHANGE_UNEMPLOYMENT'
      }]
    }
  },
  charts: {
    histograms: {}
  }
};