export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    icon: {
      data: {
        attributes: {
          alternativeText: string | null;
          caption: string | null;
          createdAt: string;
          ext: string;
          formats: Record<string, any>;
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: {
            public_id: string;
            resource_type: string;
          };
          size: number;
          updatedAt: string;
          url: string;
          width: number;
        };
      };
    };
    publishedAt: string;
  };
}

export interface Doctor {
  id: number;
  attributes: {
    About: {
      children: {
        text: string;
        type: string;
      }[];
      type: string;
    }[];
    Address: string;
    EndTime: string;
    Image: {
      data: {
        attributes: {
          alternativeText: string | null;
          caption: string | null;
          createdAt: string;
          ext: string;
          formats: {
            thumbnail: {
              ext: string;
              hash: string;
              height: number;
              mime: string;
              name: string;
              path: string | null;
              provider_metadata: {
                public_id: string;
              };
              resource_type: string;
            };
          };
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: {
            public_id: string;
          };
          resource_type: string;
          size: number;
          sizeInBytes: number;
          updatedAt: string;
          url: string;
          width: number;
        };
      };
    };
    Name: string;
    Patients: string;
    Phone: string;
    Premiun: boolean;
    StartTime: string;
    Year_of_Experience: string;
    category: {
      data: {
        attributes: {
          createdAt: string;
          name: string;
          publishedAt: string;
          updatedAt: string;
        };
        id: number;
      };
    };
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
}

export interface ResponseDoctors {
  data: [Doctor];
}
