import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ReviewsPageContent } from "@/components/ReviewsPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read customer reviews for ${site.name} in ${site.location}. Mobile auto repair, handyman, and exterior services by ${site.owner}.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={
          <>
            Trusted by <span className="text-gradient-accent">Citrus County</span>
          </>
        }
        description="Real feedback from neighbors who chose mobile service — auto repair, handyman projects, and exterior cleaning done right at their door."
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ReviewsPageContent />
      </div>
    </>
  );
}
