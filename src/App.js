import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sections/>
    </div>
  );
}


function Header(props){
  return (
    <header>
      <img id='wpalogo' src='./wpalogo.svg'/>
      <div>
        <button>sign out</button>
      </div>
    </header>
  )
}


// this should be replaced with an api call for real data once that is ready
// this data structure forces unique names for cards and links, may change in the future
let dummyData = {
  'Health & Wellness': {
    'Information': 'https://wpa-internal.wonderful.com/wellness'
  },

  'Training': {
    'WPA Training': 'https://wpatraining.com/',
    'TOP Training': 'https://wpa-internal.wonderful.com/student-data/',
  },

  'Equipment': {
    'Asset Management': 'https://wpa-internal.wonderful.com/Technical-Services/Maintenance-Management-System/',
    'Motor Field Inspections': 'https://wpa-internal.wonderful.com/Technical-Services/Maintenance-Management-System/MTR-inspection-summary',
    'Field Inspection Map': 'Field Inspection Map',
    '': '',
  },

  'Coordination': {
    'Issue Dispatch Flowchart': 'https://www.lucidchart.com/invitations/accept/bc8846ec-fc5b-45b3-8124-b4d23210c5e5',
    'Part Order Status (edit)': 'https://app.smartsheet.com/b/home?lx=mANrD5AL0etPYJCUXwqPJA',
    'Part Order Status (view)': 'https://app.smartsheet.com/b/publish?EQBCT=97bf1288adf944b0acf7ec9a86f505f3',
  },

  'Electrical Controls & Instrumentation': {
    'EIC Project Road Map': 'https://app.smartsheet.com/b/publish?EQBCT=4311ca97604545ebb77dab3754b889b9',
    'DeviceNet Parameter Detail': 'https://app.smartsheet.com/b/publish?EQBCT=3dfc144feaae498bb7b402c234fce0d7',
    'MCC Buckets': 'https://app.smartsheet.com/b/publish?EQBCT=c5420e46689644ecb57629c25b33f95d',
    'Standard Components': 'https://app.smartsheet.com/b/publish?EQBCT=003dfeeda00847caaef07c41c6fb572d',
  },

  'IT Support': {
    'New Phone Request': 'https://app.smartsheet.com/b/form/d8066607050b4711bf8372707496aa91',
    'PO Request Form': 'https://app.smartsheet.com/b/form/3098968ad64d41638eb0745e36dabbf1',
    'Support Desk Handout Form': 'https://app.smartsheet.com/b/form/d0db05bf755245b3bdf0457554912393',
    'Requests Pending PO Creation': 'https://app.smartsheet.com/b/publish?EQBCT=dd807e4ed6ce46ffa1869b39d71cd5d2',
    'PO History': 'https://app.smartsheet.com/b/publish?EQBCT=8163865e79c44f4280341f3ffda50c0c',
    'Loaner Devices - 3 Days Past Due': 'https://app.smartsheet.com/b/home?lx=9XK9o150GZokhsgK2VioxQ',
    'IT KnowledgeBase': 'https://wpa-sp.wonderful.com/MIS/KnowledgeBase/_layouts/15/start.aspx#/SitePages/End-User%20Knowledge%20Base.aspx',
  },

  'Mechanical Engineering': {
    'New Job Entry Form': 'https://app.smartsheet.com/b/form?EQBCT=ec0584fef14b41c99a070ef2dbde3af1',
    'New Drawing Entry Form': 'https://app.smartsheet.com/b/form/8fdbf617572746589ddafaf1e3d410e0',
    'Job Number Log': 'https://app.smartsheet.com/b/publish?EQBCT=66ca092a5c1546d49f309b0db848e7af',
    'AutoCAD Drawing Log': 'https://app.smartsheet.com/b/publish?EQBCT=d1d6a88b28b24b71bc8e4ba7027b0fde',
    'Job Number Archive': 'https://www.dropbox.com/s/qkbjbblpumcz3wt/Mechanical%20Job%20Number%20Archive.xls?raw=1',
    'AutoCAD Drawing Archive': 'https://app.smartsheet.com/b/publish?EQBCT=19eff738a8e94fbcb512d82e6a1f7fe0',
  },

  'Projects': {
    'Support Project Tracking Portal': 'https://app.smartsheet.com/b/publish?EQBCT=a471cb61221b451f858b5e2c64aa785f',
    'Ringi Sho Form': 'https://www.dropbox.com/s/3pg6dab09d6x6p6/Project%20Spending%20Approval%20Forms%20V1.xlsx?dl=1',
  },

  'Vendor Management': {
    'Herc Rental Request Form': 'https://app.smartsheet.com/b/form?EQBCT=4a8e2da4cca942119d61f822143960c9',
    'Herc Rental Request History': 'https://app.smartsheet.com/b/publish?EQBCT=bc364b937b8940b6a051612b7f44de73',
    'Herc Professional Contractor Catalogue': 'https://issuu.com/hercrentals/docs/procontractor_catalog_2.0?e=25072383/49826861',
  },

  'OA': {
    'OA Detail Report': 'https://app.powerbi.com/view?r=eyJrIjoiMGJkZjViZjgtNjRjMy00NTAyLThkZjMtMmVmZjM1M2Q1YWVkIiwidCI6IjU3ZmU3YmI1LWUzODItNDQ5OC04OGZlLTVjNTBkMjU2ZjczNSIsImMiOjZ9',
    'OA Data Entry Portal': 'https://wpa-internal.wonderful.com/Production/Operations-Analysis',
  },

  'PPO': {
    'New PPO Job': 'https://app.smartsheet.com/b/form/b58da0b9975c484080d2f329d4abfffa',
  },

  'Scheduling': {
    'Schedule Change Report': 'https://app.powerbi.com/view?r=eyJrIjoiNzI5MmFkNzYtZWNlNy00N2VlLTljNjktZTg4ZWY4NzVmNGU3IiwidCI6IjU3ZmU3YmI1LWUzODItNDQ5OC04OGZlLTVjNTBkMjU2ZjczNSIsImMiOjZ9',
    'Schedule Change Entries': 'https://wpa-internal.wonderful.com/Production/schedule-changes',
  },

  'Purchasing': {
    'PO Request Form': 'https://get-crackin.typeform.com/to/I0PJ2C',
    'PO Status: Pending Capital Approval': 'https://app.smartsheet.com/b/publish?EQBCT=ca756e0b9035433c8b98d5191c88c22f',
    'PO Status: Pending Sourcing': 'https://app.smartsheet.com/b/publish?EQBCT=b1f38d5ed3d54bb18590c38c3c507656',
    'PO Status: Pending PO Entry': 'https://app.smartsheet.com/b/publish?EQBCT=94887b4058384534bff44beccb4ddcde',
    'PO Status: PO\'s Issued': 'https://app.smartsheet.com/b/publish?EQBCT=7e43343501044fd88ad15560a12594faz',
  },
}


dummyData = {
  
  'General':{
    'Health & Wellness': {
      'Information': 'https://wpa-internal.wonderful.com/wellness'
    },

    'Training': {
      'WPA Training': 'https://wpatraining.com/',
      'TOP Training': 'https://wpa-internal.wonderful.com/student-data/',
    }
  },

  'Technical Services':{
    'Equipment': {
      'Asset Management': 'https://wpa-internal.wonderful.com/Technical-Services/Maintenance-Management-System/',
      'Motor Field Inspections': 'https://wpa-internal.wonderful.com/Technical-Services/Maintenance-Management-System/MTR-inspection-summary',
      'Field Inspection Map': 'Field Inspection Map',
      '': '',
    },
  
    'Coordination': {
      'Issue Dispatch Flowchart': 'https://www.lucidchart.com/invitations/accept/bc8846ec-fc5b-45b3-8124-b4d23210c5e5',
      'Part Order Status (edit)': 'https://app.smartsheet.com/b/home?lx=mANrD5AL0etPYJCUXwqPJA',
      'Part Order Status (view)': 'https://app.smartsheet.com/b/publish?EQBCT=97bf1288adf944b0acf7ec9a86f505f3',
    },
  
    'Electrical Controls & Instrumentation': {
      'EIC Project Road Map': 'https://app.smartsheet.com/b/publish?EQBCT=4311ca97604545ebb77dab3754b889b9',
      'DeviceNet Parameter Detail': 'https://app.smartsheet.com/b/publish?EQBCT=3dfc144feaae498bb7b402c234fce0d7',
      'MCC Buckets': 'https://app.smartsheet.com/b/publish?EQBCT=c5420e46689644ecb57629c25b33f95d',
      'Standard Components': 'https://app.smartsheet.com/b/publish?EQBCT=003dfeeda00847caaef07c41c6fb572d',
    },
  
    'IT Support': {
      'New Phone Request': 'https://app.smartsheet.com/b/form/d8066607050b4711bf8372707496aa91',
      'PO Request Form': 'https://app.smartsheet.com/b/form/3098968ad64d41638eb0745e36dabbf1',
      'Support Desk Handout Form': 'https://app.smartsheet.com/b/form/d0db05bf755245b3bdf0457554912393',
      'Requests Pending PO Creation': 'https://app.smartsheet.com/b/publish?EQBCT=dd807e4ed6ce46ffa1869b39d71cd5d2',
      'PO History': 'https://app.smartsheet.com/b/publish?EQBCT=8163865e79c44f4280341f3ffda50c0c',
      'Loaner Devices - 3 Days Past Due': 'https://app.smartsheet.com/b/home?lx=9XK9o150GZokhsgK2VioxQ',
      'IT KnowledgeBase': 'https://wpa-sp.wonderful.com/MIS/KnowledgeBase/_layouts/15/start.aspx#/SitePages/End-User%20Knowledge%20Base.aspx',
    },
  
    'Mechanical Engineering': {
      'New Job Entry Form': 'https://app.smartsheet.com/b/form?EQBCT=ec0584fef14b41c99a070ef2dbde3af1',
      'New Drawing Entry Form': 'https://app.smartsheet.com/b/form/8fdbf617572746589ddafaf1e3d410e0',
      'Job Number Log': 'https://app.smartsheet.com/b/publish?EQBCT=66ca092a5c1546d49f309b0db848e7af',
      'AutoCAD Drawing Log': 'https://app.smartsheet.com/b/publish?EQBCT=d1d6a88b28b24b71bc8e4ba7027b0fde',
      'Job Number Archive': 'https://www.dropbox.com/s/qkbjbblpumcz3wt/Mechanical%20Job%20Number%20Archive.xls?raw=1',
      'AutoCAD Drawing Archive': 'https://app.smartsheet.com/b/publish?EQBCT=19eff738a8e94fbcb512d82e6a1f7fe0',
    },
  
    'Projects': {
      'Support Project Tracking Portal': 'https://app.smartsheet.com/b/publish?EQBCT=a471cb61221b451f858b5e2c64aa785f',
      'Ringi Sho Form': 'https://www.dropbox.com/s/3pg6dab09d6x6p6/Project%20Spending%20Approval%20Forms%20V1.xlsx?dl=1',
    },
  
    'Vendor Management': {
      'Herc Rental Request Form': 'https://app.smartsheet.com/b/form?EQBCT=4a8e2da4cca942119d61f822143960c9',
      'Herc Rental Request History': 'https://app.smartsheet.com/b/publish?EQBCT=bc364b937b8940b6a051612b7f44de73',
      'Herc Professional Contractor Catalogue': 'https://issuu.com/hercrentals/docs/procontractor_catalog_2.0?e=25072383/49826861',
    }
  },


  'Production':{
    'OA': {
      'OA Detail Report': 'https://app.powerbi.com/view?r=eyJrIjoiMGJkZjViZjgtNjRjMy00NTAyLThkZjMtMmVmZjM1M2Q1YWVkIiwidCI6IjU3ZmU3YmI1LWUzODItNDQ5OC04OGZlLTVjNTBkMjU2ZjczNSIsImMiOjZ9',
      'OA Data Entry Portal': 'https://wpa-internal.wonderful.com/Production/Operations-Analysis',
    },
  
    'PPO': {
      'New PPO Job': 'https://app.smartsheet.com/b/form/b58da0b9975c484080d2f329d4abfffa',
    },
  
    'Scheduling': {
      'Schedule Change Report': 'https://app.powerbi.com/view?r=eyJrIjoiNzI5MmFkNzYtZWNlNy00N2VlLTljNjktZTg4ZWY4NzVmNGU3IiwidCI6IjU3ZmU3YmI1LWUzODItNDQ5OC04OGZlLTVjNTBkMjU2ZjczNSIsImMiOjZ9',
      'Schedule Change Entries': 'https://wpa-internal.wonderful.com/Production/schedule-changes',
    }
  },


  'Purchasing':{
    'Purchasing': {
      'PO Request Form': 'https://get-crackin.typeform.com/to/I0PJ2C',
      'PO Status: Pending Capital Approval': 'https://app.smartsheet.com/b/publish?EQBCT=ca756e0b9035433c8b98d5191c88c22f',
      'PO Status: Pending Sourcing': 'https://app.smartsheet.com/b/publish?EQBCT=b1f38d5ed3d54bb18590c38c3c507656',
      'PO Status: Pending PO Entry': 'https://app.smartsheet.com/b/publish?EQBCT=94887b4058384534bff44beccb4ddcde',
      'PO Status: PO\'s Issued': 'https://app.smartsheet.com/b/publish?EQBCT=7e43343501044fd88ad15560a12594faz',
    }
  }
}


function Sections(){
  return Object.keys(dummyData).map(
    section => <Section title={section} cards={dummyData[section]}/>
  )
}


function Section(props){
  const {title, cards} = props
  
  return (
    <div className='section'>
      <h1>{title}</h1>
      <div className='cards'>
        {
          Object.keys(cards)
          .map(card => <Card title={card} links={cards[card]}/>)
        }
      </div>
    </div>
  )
}


function Card(props){
  const {title, links} = props

  return (
    <div className='card'>
      <p>{title}</p>
      {
        Object.keys(links)
          .map(link => <a href={links[link]}>{link}</a>)
      }
    </div>
  )
}


export default App;
