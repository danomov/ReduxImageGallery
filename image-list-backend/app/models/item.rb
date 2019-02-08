class Item < ApplicationRecord

    validates :image, presence: true, format: { with: /\Ahttps?:\/\/[^\n]+\z/i , message: 'Invalid URL!'}
    validates :text, presence: true
end
