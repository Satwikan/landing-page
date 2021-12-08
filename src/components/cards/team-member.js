/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook,} from 'react-icons/fa';

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        <Image src={member?.avatar} alt={member?.name} />
      </Flex>
      <Box sx={styles.about}>
        <Heading as="h3">{member?.name}</Heading>
        <Text as="p">{member?.designation}</Text>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size="25px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="25px" color="#161614" />
              )}
              {social?.name === 'linkedin' && (
                <FaLinkedin
                  size="25px"
                  color="#0a66c2"
                  style={{ backgroundColor: '#ffffff'}}
                />
              )}
              {social?.name === 'facebook' && (
                <FaFacebook
                  size="25px"
                  color="#0167e2"
                  style={{ backgroundColor: '#ffffff'}}
                />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, null],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [5, null, 20, null, 7],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, null],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
