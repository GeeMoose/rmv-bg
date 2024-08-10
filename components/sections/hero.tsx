import * as Craft from '@/components/craft/layout';
import Placeholder from '@/public/hero.webp';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { badgeVariants } from '../ui/badge';

const Hero = () => {
	return (
		<Craft.Section className="border-b">
			<Craft.Container>
				<div className="not-prose flex flex-col gap-6">
					<h1 className="text-primary-500 text-4xl md:text-6xl">
						Image Background Removal
					</h1>
					<h2 className="text-xl md:text-3xl font-light">
						Achieve highly accurate image segmentation with our light applications.{' '}
					</h2>
					<Link
						href="https://github.com/9d8dev/fjord"
						className={`${badgeVariants({ variant: 'outline' })} w-fit`}
					>
						Get Started for FREE on Canva
						<ArrowRightIcon />
					</Link>
					<div className="w-full overflow-hidden rounded-lg md:rounded-xl">
						<Image
							rel="preload"
							className="h-full w-full object-cover object-bottom"
							src={Placeholder}
							priority={true}
							width={1024}
							height={1024}
							alt="hero image"
							placeholder="blur"
						/>
					</div>
				</div>
			</Craft.Container>
		</Craft.Section>
	);
};

export default Hero;
