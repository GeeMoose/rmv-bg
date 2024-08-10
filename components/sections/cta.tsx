import * as Craft from "@/components/craft/layout";
import { CTAForm } from "./cta-form";

const CTA = () => {
  return (
    <Craft.Section className="border-t">
      <Craft.Container>
        <h3 className="!mt-0">Try rmv-bg out for yourself!</h3>
        <p>
          Reach out to learn more about rmv-bg. If you encounter any issues, please contact us immediately.
        </p>
        <CTAForm />
      </Craft.Container>
    </Craft.Section>
  );
};

export default CTA;
