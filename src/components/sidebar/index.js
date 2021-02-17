import {
  SidebarContainer,
  SidebarLogoContainer,
  SidebarLogo,
  SidebarOptions,
  SidebarOption,
  SidebarProfile,
} from './SidebarElements'
import '../../assets/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ExploreIcon from '@material-ui/icons/Explore';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLogoContainer>
        <SidebarLogo>
          <FontAwesomeIcon icon="virus" color="#F6C879" />
        </SidebarLogo>
      </SidebarLogoContainer>

      <SidebarOptions>
        <SidebarOption>
          <ExploreIcon />
        </SidebarOption>
        <SidebarOption>
          <FontAwesomeIcon icon="biohazard" />
        </SidebarOption>
        <SidebarOption>
          <FontAwesomeIcon icon="spider" />
        </SidebarOption>
        <SidebarOption>
          <FontAwesomeIcon icon="tint" />
        </SidebarOption>
        <SidebarOption>
          <FontAwesomeIcon icon="cog" />
        </SidebarOption>
      </SidebarOptions>

      <SidebarProfile src="https://instagram.fbeg10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73398052_473606633258578_3890054899072761856_n.jpg?_nc_ht=instagram.fbeg10-1.fna.fbcdn.net&_nc_ohc=L-0Q7fW05w8AX9CyMdL&tp=1&oh=58e6b462f16a81c2caf26ed41715bf44&oe=6043F312" />
    </SidebarContainer>
  )
}

export default Sidebar
