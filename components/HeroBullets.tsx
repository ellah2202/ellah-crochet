"use client"
import { Container, Title, Button, Group, Text, List, ThemeIcon, rem, BackgroundImage } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <BackgroundImage
      src="image/bg_cover_.png"
    >
      <Container size="sm">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Craquez pour nos <br /> <span className={classes.highlight}> mignonneries </span>   fais mains.
            </Title>
            <Text c="dimmed" mt="md">
              Que ce soit pour embellir votre maison ou ajouter une note délicate à votre garde-robe,
              nos pièces crochetées sont conçues pour durer et transmettre une émotion.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color='#e7933f'>
                  <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b> 100% Fais-main </b> – et en plus eco-responsable.
              </List.Item>
              <List.Item>
                <b> Personnalisable </b> – selon votre imagination.
              </List.Item>
              <List.Item>
                <b>Meilleur Qualite</b> – toujours a la recherche du meilleur.
              </List.Item>
            </List>
            <Group mt={30}>
              <Button radius="xl" size="md" color='#e7933f' className={classes.control}>
                <a href="#contact">Contact</a>
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                <a href="#truc">Produits</a>
              </Button>
            </Group>
            {/* <Image src={"/image/img_cover.png"} className={classes.image} /> */}
          </div>
        </div>
      </Container>
    </BackgroundImage>
  );
}
