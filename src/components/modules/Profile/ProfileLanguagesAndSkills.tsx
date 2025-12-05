export default function ProfileLanguagesAndSkills({
  languages,
  expertise,
  preferences,
}: {
  languages: string[];
  expertise: string[];
  preferences: string[];
}) {
  return (
    <section className="p-6 rounded-xl border shadow-sm space-y-3">
      <h2 className="text-xl font-semibold">Languages & Skills</h2>

      <div>
        <h4 className="font-medium">Languages</h4>
        <div className="flex gap-2 flex-wrap">
          {languages?.map((lang, i) => (
            <span key={i} className="px-2 py-1 bg-gray-200 rounded text-sm">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Guide specific skills */}
      {expertise?.length > 0 && (
        <div>
          <h4 className="font-medium">Guide Expertise</h4>
          <div className="flex gap-2 flex-wrap">
            {expertise?.map((skill, i) => (
              <span key={i} className="px-2 py-1 bg-green-200 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tourist preferences */}
      {preferences?.length > 0 && (
        <div>
          <h4 className="font-medium">Tourist Preferences</h4>
          <div className="flex gap-2 flex-wrap">
            {preferences?.map((pref, i) => (
              <span key={i} className="px-2 py-1 bg-yellow-200 rounded text-sm">
                {pref}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
