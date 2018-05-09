// Dependencies
import React from 'react';
import classnames from 'classnames';

//Bootstrap
import {
    TabContent,
    TabPane,
    Badge,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardImg,
    CardBody,
    CardText,
    Tooltip
} from 'reactstrap';

// Components
import {
    Template,
    PageHeaderBlock,
    WaddlColumns,
    WaddlLabel,
    WaddlCardLink
} from '../components';

// Page
export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Template pageType="gear">
                <div>
                    <PageHeaderBlock>
                        <p>Gear</p>
                        <a>+</a>
                    </PageHeaderBlock>
                    <Nav tabs style={tabsBlock}>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Cycling
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Running
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                            >
                                Swimming
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} style={waddlContent}>
                        <TabPane tabId="1">
                            <br/>
                            <Badge href="#bicycles" color="secondary"> Bicycles</Badge> {''}
                            <Badge href="#cleats" color="secondary">Cleats</Badge> {''}
                            <Badge href="#jerseys" color="secondary"> Jerseys</Badge> {''}
                            <Badge href="#helmets" color="secondary"> Helmets</Badge> {''}
                            <Badge href="#cycleShorts" color="secondary">Shorts</Badge> {''}
                            <Badge href="#cycleSocks" color="secondary">Socks</Badge> {''}
                            <Badge href="#cycleEquipment" color="secondary">Equipment</Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="bicycles">Bicycles</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="cleats">Cleats</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="jerseys">Jerseys</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="helmets">Helmets</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="cycleShorts">Socks</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="cycleSocks">Socks</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="cycleEquipment">Equipment</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="2">
                            <br/>
                            <Badge href="#trainers" color="secondary"> Trainers</Badge> {''}
                            <Badge href="#tShirts" color="secondary">T-shirts</Badge> {''}
                            <Badge href="#tops" color="secondary"> Tops</Badge> {''}
                            <Badge href="#shorts" color="secondary"> Shorts</Badge> {''}
                            <Badge href="#skins" color="secondary">Skins</Badge> {''}
                            <Badge href="#socks" color="secondary">Socks</Badge> {''}
                            <Badge href="#accessories" color="secondary"> Accessories</Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="trainers">Road Trainers</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel>Trail Trainers</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="tShirts">T-shirts</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="tops">Tops (Summer)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel>Tops (Winter)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="shorts">Shorts</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="skins">Skins</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="socks">Socks</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="accessories">Accessories</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="3">
                            <br/>
                            <Badge href="#goggles" color="secondary"> Goggles (18)</Badge> {''}
                            <Badge href="#swimwear" color="secondary"> Swimwear (36) </Badge> {''}
                            <Badge href="#swimcap" color="secondary"> Swimcap (8)</Badge> {''}
                            <Badge href="#wetsuit" color="secondary"> Wetsuit (28)</Badge> {''}
                            <Badge href="#equipment" color="secondary"> Equipment (8) </Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="goggles">Goggles</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2K4u60P">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525711959/waddl_goggles.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>2XU Rival Smoke</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2FYgRwc">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525712114/waddl_goggles_02.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>2XU Solace</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2FXnXB7">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892780/goggles_03.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>2XU Stealth</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2KLzWVY">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892853/waddl_goggles_04.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Adidas Peristar Fitswim</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2G1Dxvp">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892932/waddl_goggles_05.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Vista Swimming Mask</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2K6EFAm">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892973/waddl_goggles_06.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Kayenne </CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2I46nRW">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893121/waddl_goggles_07.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Arena 74 Tracks</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2rxcR0j">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893212/waddl_goggles_08.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Arena Cobra Ultra Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2G0TVfR">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893399/waddl_goggles_09.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Maru Sonic Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2FZx6Jp">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893476/waddl_goggles_10.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>MP Michael Phelps XCEED</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2I2Dndk">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893548/waddl_goggles_11.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Nike Swim Performance Remora</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IqBSFa">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893683/waddl_goggles_12.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Aquapulse Max 2 Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2I6WMFD">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893837/waddl_goggles_13.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Fastskin Speedsocket 2 Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2rtOGAY">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893943/waddl_goggles_14.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Futura Biofuse</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IabA6K">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894067/waddl_goggles_15.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Speedsocket Mirror Goggles</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IuyAR2">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894362/waddl_goggles_16.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Zoggs Predator Flex 2.0 Polarised</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IugJdc">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894475/waddl_goggles_17.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Zoggs Predator Flex 2.0 Titanium</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2rvgDr6">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894590/waddl_goggles_18.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Zoggs Predator Polarised Swimming Goggles</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="swimwear">Swimwear (M)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel>Swimwear (F)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="swimcap">Swimcap</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="wetsuit">Wetsuit (M)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel>Wetsuit (F)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="equipment">Training Equipment</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                    </TabContent>
                </div>
            </Template>
        );
    }
}

// Inline Styles
const tabsBlock = {
    background: '#FA4DAA',
    paddingLeft: '15px',
    marginTop: '-1px'
};

const waddlContent = {
    paddingLeft: '15px',
    paddingRight: '15px'
};
