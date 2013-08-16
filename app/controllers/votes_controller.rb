class VotesController < ApplicationController

  def index
  end

  def new
    @vote = current_user ? current_user.votes.new : Vote.new
  end
end
