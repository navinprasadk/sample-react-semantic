
import React, {Component} from 'react';
import { Segment, Dropdown, Menu, Input, Button, Grid, Icon, Step, Card, Form, Radio } from 'semantic-ui-react';
import MenuBar from './MenuBar';
import '../styles/style.css';

const stateOptions = [
  { key: "Alaska", value: "Alaska", text: "Alaska" },
  { key: "California", value: "California", text: "California" },
  { key: "Florida", value: "Florida", text: "Florida" },
  { key: "Georgia", value: "Georgia", text: "Georgia" },
  { key: "Hawaii", value: "Hawaii", text: "Hawaii" },
  { key: "New Jersey", value: "New Jersey", text: "New Jersey" },
  { key: "Ohio", value: "Ohio", text: "Ohio" },
  { key: "Texas", value: "Texas", text: "Texas" },
  { key: "Washington", value: "Washington", text: "Washington" },
  { key: "Virginia", value: "Virginia", text: "Virginia" }
];

const addressOptions = [
  { key: "Business", value: "Business", text: "Business" },
  { key: "Residential", value: "Residential", text: "Residential" }
];

const employeeOptions = [
  { key: "1-4", value: "1-4", text: "1-4" },
  { key: "5-9", value: "5-9", text: "5-9" },
  { key: "10-19", value: "10-19", text: "10-19" },
  { key: "20-49", value: "20-49", text: "20-49" },
  { key: "50-99", value: "50-99", text: "50-99" },
  { key: "100-249", value: "100-249", text: "100-249" },
  { key: "250+", value: "250+", text: "250+" }
];

const industryOptions = [
  { key: "Administrative and Support and Waste Management and Remediation Services", value: "Administrative and Support and Waste Management and Remediation Services", text: "Administrative and Support and Waste Management and Remediation Services" },
  { key: "Agriculture, Forestry, Fishing and Hunting", value: "Agriculture, Forestry, Fishing and Hunting", text: "Agriculture, Forestry, Fishing and Hunting" },
  { key: "Arts, Entertainment, and Recreation", value: "Arts, Entertainment, and Recreation", text: "Arts, Entertainment, and Recreation" },
  { key: "Construction", value: "Construction", text: "Construction" },
  { key: "Educational Services", value: "Educational Services", text: "Educational Services" },
  { key: "Accommodation and Food Services", value: "Accommodation and Food Services", text: "Accommodation and Food Services" },
  { key: "Finance and Insurance", value: "Finance and Insurance", text: "Finance and Insurance" },
  { key: "Health Care and Social Assistance", value: "Health Care and Social Assistance", text: "Health Care and Social Assistance" },
  { key: "Information", value: "Information", text: "Information" },
  { key: "Management of Companies and Enterprises", value: "Management of Companies and Enterprises", text: "Management of Companies and Enterprises" },
  { key: "Information", value: "Information", text: "Information" },
  { key: "Manufacturing1", value: "Manufacturing1", text: "Manufacturing1" },
  { key: "Manufacturing2", value: "Manufacturing2", text: "Manufacturing2" },
  { key: "Manufacturing3", value: "Manufacturing3", text: "Manufacturing3" },
  { key: "Mining, Quarrying, and Oil and Gas Extraction", value: "Mining, Quarrying, and Oil and Gas Extraction", text: "Mining, Quarrying, and Oil and Gas Extraction" },
  { key: "Other Services (except Public Administration)", value: "Other Services (except Public Administration)", text: "Other Services (except Public Administration)" }
];

export default class Registration extends Component {
  constructor(props) {
  super(props);
  this.state = {
    stepperoneStatus: true,
    steppertwoStatus: false,
    stepperthreeStatus: false,
    stepperfourStatus: false
  }
}

render() {
  const {
    stepperoneStatus,
    steppertwoStatus,
    stepperthreeStatus,
    stepperfourStatus
  } = this.state

    return(
      <div>
      <MenuBar/>
      <Grid>
      <Grid.Column width={3}/>
      <Grid.Column width={10}>
      <Step.Group stackable='tablet' style = {{ width: "100%", marginLeft: "3.5%", marginTop:"1%", marginBottom:"-0.1%" }} className = "stepper">
          <Step active={this.state.stepperoneStatus} style = {{borderBottomLeftRadius:"0"}}>
            <Icon name='user' style={{ fontSize: 'large' }}/>
            <Step.Content>
              <Step.Title>Login Information</Step.Title>
            </Step.Content>
          </Step>
          <Step active = {this.state.steppertwoStatus}>
            <Icon name='address card outline' style={{ fontSize: 'large' }}/>
            <Step.Content>
              <Step.Title>Your Address</Step.Title>
            </Step.Content>
          </Step>
          <Step active = {this.state.stepperthreeStatus}>
            <Icon name='plus' style={{ fontSize: 'large' }}/>
            <Step.Content>
              <Step.Title>Account Details</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

      <Card attached align="center" style = {{width: "100%",marginLeft: "3.5%"}}>
     {
       this.state.stepperoneStatus ?
       <div>





       <Form style={{marginTop:'3%'}}>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Email Address</label>
              <Input placeholder='Email Address' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Password</label>
              <Input placeholder='Password' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Re-Type Password</label>
              <Input placeholder='Re-Type Password' />
        </Form.Field>
        </Form>

         <Button style={{marginTop:'2%', marginBottom:'2%', backgroundColor:'#003E6A', color:'white'}} onClick={()=>{
           this.setState({
             stepperoneStatus:false,
             steppertwoStatus:true
           })
         }}  content='Next' icon='right arrow' labelPosition='right'>
         </Button>
       </div> :
       this.state.steppertwoStatus ?
       <div>

       <Form style={{marginTop:'3%'}}>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>First Name</label>
              <Input placeholder='First Name' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Last Name</label>
              <Input placeholder='Last Name' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Company Name</label>
              <Input placeholder='Company Name' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Address</label>
              <Input placeholder='Address' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>City</label>
              <Input placeholder='City' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>State</label>
              <Dropdown placeholder='Select State'  search selection options={stateOptions} />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>ZIP code</label>
              <Input placeholder='ZIP code' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Address Type</label>
              <Dropdown placeholder='Select Address Type'  search selection options={addressOptions} />
        </Form.Field>
        <Form.Field inline>
          <Form.Group inline>
              <label  style={{color:'#003E6A ', fontSize:'120%'}}>Phone Number</label>
              <Input placeholder='(xxx)'/>-
              <Input placeholder='xxx'/>-
              <Input placeholder='xxxx'/>
          </Form.Group>
        </Form.Field>
        </Form>

         <Button style={{marginTop:'2%',marginBottom:'2%'}} onClick={()=>{
           this.setState({
             stepperoneStatus:true,
             steppertwoStatus:false
           })
         }}  content='Previous' icon='left arrow' labelPosition='left'>

         </Button>
         <Button style={{marginTop:'2%',marginBottom:'2%', backgroundColor:'#003E6A', color:'white'}} onClick={()=>{
           this.setState({
             steppertwoStatus:false,
             stepperthreeStatus:true
           })
         }}  content='Next' icon='right arrow' labelPosition='right'>
         </Button>
       </div> :
       this.state.stepperthreeStatus ?
       <div>

       <Form style={{marginTop:'3%'}}>
        <Form.Field inline>
             <Form.Group style={{fontWeight:"bold"}}>
                <Form.Field >
                  <label style={{color:'#003E6A ', fontSize:'120%'}}>Account Type</label>
                </Form.Field>
                <Form.Field>
                  <Radio label='Home Office' name='radioGroup' value='Home Office' checked={this.state.value === 'Home Office'} onChange={()=>{this.setState({ value: 'Home Office' })}} />
                </Form.Field>
                <Form.Field>
                  <Radio label='Business' name='radioGroup' value='Business' checked={this.state.value === 'Business'}  onChange={()=>{this.setState({ value: 'Business' })}}/>
                </Form.Field>
                <Form.Field>
                  <Radio label='Education' name='radioGroup' value='Education' checked={this.state.value === 'Education'}  onChange={()=>{this.setState({ value: 'Education' })}}/>
                </Form.Field>
                <Form.Field>
                  <Radio label='Government' name='radioGroup' value='Government' checked={this.state.value === 'Government'}  onChange={()=>{this.setState({ value: 'Government' })}}/>
                </Form.Field>
                <Form.Field>
                  <Radio label='Healthcare' name='radioGroup' value='Healthcare' checked={this.state.value === 'Healthcare'} onChange={()=>{this.setState({ value: 'Healthcare' })}}/>
                </Form.Field>
             </Form.Group>
        </Form.Field>
        <Form.Field inline>
             <Form.Group style={{fontWeight:"bold"}}>
                <Form.Field >
                  <label style={{color:'#003E6A ', fontSize:'120%'}}>Category Type</label>
                </Form.Field>
                <Form.Field>
                  <Radio label='EPRO' name='radioGroup' value2='EPRO' checked={this.state.value2 === 'EPRO'} onChange={()=>{this.setState({ value2: 'EPRO' })}} />
                </Form.Field>
                <Form.Field>
                  <Radio label='PSF' name='radioGroup' value2='PSF' checked={this.state.value2 === 'PSF'}  onChange={()=>{this.setState({ value2: 'PSF' })}}/>
                </Form.Field>
                <Form.Field>
                  <Radio label='API' name='radioGroup' value2='API' checked={this.state.value2 === 'API'}  onChange={()=>{this.setState({ value2: 'API' })}}/>
                </Form.Field>
                <Form.Field>
                  <Radio label='CATALOG' name='radioGroup' value2='CATALOG' checked={this.state.value2 === 'CATALOG'}  onChange={()=>{this.setState({ value2: 'CATALOG' })}}/>
                </Form.Field>
             </Form.Group>
        </Form.Field>

        <Form.Field inline>
             <Form.Group style={{fontWeight:"bold"}}>
                <Form.Field >
                  <label style={{color:'#003E6A ', fontSize:'120%'}}>Select Account Flag</label>
                </Form.Field>
                <Form.Field>
                  <Radio label='Non-Profit Organization' name='radioGroup' value2='Non-Profit Organization' checked={this.state.value2 === 'Non-Profit Organization'} onChange={()=>{this.setState({ value2: 'Non-Profit Organization' })}} />
                </Form.Field>
                <Form.Field>
                  <Radio label=' P.O. may come from a Purchasing Agent' name='radioGroup' value2=' P.O. may come from a Purchasing Agent' checked={this.state.value2 === ' P.O. may come from a Purchasing Agent'}  onChange={()=>{this.setState({ value2: ' P.O. may come from a Purchasing Agent' })}}/>
                </Form.Field>
             </Form.Group>
        </Form.Field>

        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Number of Employees</label>
              <Dropdown placeholder='Number of Employees'  search selection options={employeeOptions} />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Industry</label>
              <Dropdown placeholder='Industry'  search selection options={industryOptions} />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Select Account Flag</label>
              <Input placeholder='Select Account Flag' />
        </Form.Field>
        <Form.Field inline>
              <label style={{color:'#003E6A ', fontSize:'120%'}}>Best Buy Tax-Exempt Quick Card ID</label>
              <Input placeholder='Best Buy Tax-Exempt Quick Card ID' />
        </Form.Field>
        </Form>

         <Button style={{marginTop:'2%',marginBottom:'2%'}} onClick={()=>{
           this.setState({
             steppertwoStatus:true,
             stepperthreeStatus:false
           })
         }}   content='Previous' icon='left arrow' labelPosition='left'>
         </Button>
         <Button style={{marginTop:'2%',marginBottom:'2%',backgroundColor:'#003E6A',color:'white'}}>
         CREATE ACCOUNT
         </Button>

       </div> :
       null
     }
   </Card>
   </Grid.Column>
   <Grid.Column width={3}/>
</Grid>
</div>
 );
  }
}
