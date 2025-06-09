import Image from "next/image";
import {
  Target,
  Heart,
  Award,
  BookOpen,
  Coffee,
  Lightbulb,
  Globe,
} from "lucide-react";
import styles from "./about.module.css";
import { faker } from "@faker-js/faker";

// Generate fake team data
const generateTeamMember = (role, specialty) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  role,
  specialty,
  bio: faker.lorem.sentences(2),
  image: `https://picsum.photos/300/300?random=${Math.floor(
    Math.random() * 1000
  )}`,
  social: {
    twitter: `@${faker.internet.username()}`,
    linkedin: faker.internet.username(),
  },
});

const teamMembers = [
  generateTeamMember("Founder & Editor-in-Chief", "Creative Writing"),
  generateTeamMember("Senior Writer", "Technology & Innovation"),
  generateTeamMember("Content Strategist", "Digital Marketing"),
  generateTeamMember("Community Manager", "Social Media"),
  generateTeamMember("Designer", "Visual Storytelling"),
  generateTeamMember("Developer", "Web Development"),
];

// Generate fake testimonials
const generateTestimonial = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  company: faker.company.name(),
  content: faker.lorem.paragraph(),
  avatar: `https://picsum.photos/80/80?random=${Math.floor(
    Math.random() * 1000
  )}`,
});

const testimonials = Array.from({ length: 6 }, generateTestimonial);

export default function AboutPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.brandName}>theScribbly</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Where words come alive and stories find their voice. We're
              passionate about creating meaningful content that inspires,
              educates, and connects people from all walks of life.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50K+</span>
                <span className={styles.statLabel}>Monthly Readers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1,200+</span>
                <span className={styles.statLabel}>Articles Published</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="https://picsum.photos/600/400?random=1"
              alt="theScribbly workspace"
              width={600}
              height={400}
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mission}>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To democratize storytelling by providing a platform where every
              voice matters. We believe in the power of words to change
              perspectives, spark conversations, and build bridges between
              communities.
            </p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <Lightbulb size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To become the world's most trusted source for authentic, diverse,
              and impactful content that empowers readers to think critically
              and act compassionately in an ever-changing world.
            </p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <Heart size={32} />
            </div>
            <h3>Our Values</h3>
            <p>
              Authenticity, creativity, and community drive everything we do.
              We're committed to maintaining the highest standards of editorial
              integrity while fostering an inclusive environment for all voices.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h2>Our Story</h2>
            <p>
              theScribbly began as a simple idea: what if we could create a
              space where authentic stories could flourish without the noise of
              traditional media? Founded in 2019 by a group of passionate
              writers and thinkers, we started with just a handful of articles
              and a dream.
            </p>
            <p>
              Today, we've grown into a thriving community of writers, readers,
              and storytellers from around the globe. Our platform has become a
              beacon for those seeking genuine, thought-provoking content that
              challenges the status quo and celebrates the human experience in
              all its complexity.
            </p>
            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <Award className={styles.achievementIcon} />
                <span>Best Digital Publication 2023</span>
              </div>
              <div className={styles.achievement}>
                <Globe className={styles.achievementIcon} />
                <span>Featured in 25+ Countries</span>
              </div>
              <div className={styles.achievement}>
                <BookOpen className={styles.achievementIcon} />
                <span>Published 3 Bestselling Books</span>
              </div>
            </div>
          </div>
          <div className={styles.storyImages}>
            <Image
              src="https://picsum.photos/400/300?random=2"
              alt="Our journey"
              width={400}
              height={300}
              className={styles.storyImg}
            />
            <Image
              src="https://picsum.photos/400/250?random=3"
              alt="Team collaboration"
              width={400}
              height={250}
              className={styles.storyImg}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our Team</h2>
          <p>The creative minds behind theScribbly's success</p>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.teamImageWrapper}>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamInfo}>
                <h3>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamSpecialty}>{member.specialty}</p>
                <p className={styles.teamBio}>{member.bio}</p>
                <div className={styles.teamSocial}>
                  <span>{member.social.twitter}</span>
                  <span>{member.social.linkedin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2>What Our Readers Say</h2>
          <p>Voices from our amazing community</p>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <p className={styles.testimonialContent}>
                "{testimonial.content}"
              </p>
              <div className={styles.testimonialAuthor}>
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className={styles.testimonialAvatar}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <Coffee className={styles.ctaIcon} />
          <h2>Join Our Journey</h2>
          <p>
            Ready to be part of something bigger? Whether you're a writer,
            reader, or simply someone who believes in the power of authentic
            storytelling, we'd love to have you join our community.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Start Writing</button>
            <button className={styles.ctaSecondary}>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
