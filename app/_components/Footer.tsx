import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import logo from '@/public/images/daya-tadbir-logo.png';

const QuickLinks = [
  { title: 'خانه' },
  { title: 'درباره ما' },
  { title: 'فروشگاه' },
  { title: 'بلاگ' },
  { title: 'تماس باما' },
];
const HelpLinks = [
  { title: 'پی گیری سفارش' },
  { title: 'شرایط بازگشت' },
  { title: 'نحوه ارسال' },
  { title: 'تماس با ما' },
  { title: 'پرسش های پر تکرار' },
];

export default function Footer() {
  return (
    <Container
      maxWidth={'lg'}
      sx={{
        padding: { lg: '0px' },
        margin: '100px auto 30px auto',
      }}
    >
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        alignItems={{ md: 'center', xs: 'start' }}
        justifyContent={'space-between'}
        sx={{ width: 1, gap: '50px' }}
      >
        <Stack direction="column" spacing={1.5}>
          <Image src={logo} alt="logo" style={{ width: '40%', height: 'auto' }} />
          <Typography
            sx={{ maxWidth: '300px', fontSize: 16, fontWeight: 300, color: '#3a3a3a' }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است، و برای شرایط فعلی تکنولوژی
          </Typography>
          <Stack
            direction={'row'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            gap={1}
          >
            <InstagramIcon
              sx={{ fill: '#9d9d9d', cursor: 'pointer', '&:hover': { fill: '#72aec8' } }}
            />
            <GitHubIcon
              sx={{ fill: '#9d9d9d', cursor: 'pointer', '&:hover': { fill: '#72aec8' } }}
            />
            <WhatsAppIcon
              sx={{ fill: '#9d9d9d', cursor: 'pointer', '&:hover': { fill: '#72aec8' } }}
            />
            <TelegramIcon
              sx={{ fill: '#9d9d9d', cursor: 'pointer', '&:hover': { fill: '#72aec8' } }}
            />
            <PhoneIphoneIcon
              sx={{ fill: '#9d9d9d', cursor: 'pointer', '&:hover': { fill: '#72aec8' } }}
            />
          </Stack>
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{
              maxWidth: '200px',
              fontSize: 20,
              fontWeight: 400,
              color: '#272727',
              textTransform: 'uppercase',
            }}
          >
            دسترسی سریع
          </Typography>
          {QuickLinks.map((link, index: number) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#272727',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  '&:hover': { color: '#72aec8' },
                }}
              >
                {link.title}
              </Typography>
            );
          })}
        </Stack>
        <Stack direction="column" spacing={1}>
          <Typography
            sx={{
              maxWidth: '200px',
              fontSize: 20,
              fontWeight: 400,
              color: '#272727',
              textTransform: 'uppercase',
            }}
          >
            راهنمای خرید
          </Typography>
          {HelpLinks.map((link, index: number) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#272727',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  '&:hover': { color: '#72aec8' },
                }}
              >
                {link.title}
              </Typography>
            );
          })}
        </Stack>
        <Stack direction={'column'} spacing={1}>
          <Typography
            sx={{
              maxWidth: '200px',
              fontSize: 20,
              fontWeight: 400,
              color: '#272727',
              textTransform: 'uppercase',
            }}
          >
            راه ارتباطی
          </Typography>
          <Typography
            sx={{
              color: '#3a3a3a',
              fontSize: 16,
              fontWeight: 500,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            info@gmail.com
          </Typography>
          <Typography
            sx={{
              color: '#3a3a3a',
              fontSize: 16,
              fontWeight: 500,
              textDecoration: 'underline',
              cursor: 'pointer',
              direction: 'ltr',
            }}
          >
            +98 911 111 1111
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
